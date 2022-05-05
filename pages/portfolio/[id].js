import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await axios.get(`/api/portfolio/${id}`);
  return {
    props: { data: res.data.data }, // will be passed to the page component as props
  };
}

function Show({ data }) {
  const router = useRouter();

  return (
    <section className="min-h-screen h-max bg-gradient-to-t from-blue-500/20 to-pink-500/20">
      <div className="container p-4 mx-auto">
        <div
          onClick={() => router.back()}
          className="mb-4 cursor-pointer w-max"
        >
          <i className="fa-solid fa-arrow-left"></i> Back
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="max-w-3xl pb-2 mx-auto overflow-hidden bg-white rounded-md shadow-md">
            <Image
              src={data.image}
              alt={data.name}
              width={800}
              height={400}
              className="block object-cover object-center "
            />
            <div className="flex items-center justify-between px-2 pb-1">
              <h3 className="text-orange-500">{data.name}</h3>
              <div>
                <a href={data.link} target="_blank" rel="noreferrer">
                  <i className="mx-2 text-xs text-gray-400 fa-solid fa-link"></i>
                </a>
                <a href={data.github} target="_blank" rel="noreferrer">
                  <i className="text-xs text-gray-400 fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full max-w-3xl p-4 mx-auto bg-white rounded-md shadow-md">
            <span className="text-gray-800">Description :</span>
            <br />
            <p className="font-normal text-gray-400">{data.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Show;
