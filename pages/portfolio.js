import axios from 'axios';
import Link from 'next/link';
import Card from '../components/Card';

export async function getServerSideProps() {
  const res = await axios.get('api/portfolio');

  return {
    props: {
      data: res.data.data.reverse(),
    },
  };
}

function portfolio({ data }) {
  return (
    <section className="min-h-screen h-max bg-gradient-to-t from-blue-500/20 to-pink-500/20">
      <div className="container p-4 mx-auto">
        <div className="mb-4">
          <Link href="/" passHref={true}>
            <span className="cursor-pointer">
              <i className="fa-solid fa-arrow-left"></i> Back
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
          {data.map((el) => {
            return (
              <Card
                key={el.id}
                id={el.id}
                name={el.name}
                link={el.link}
                github={el.github}
                image={el.image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default portfolio;
