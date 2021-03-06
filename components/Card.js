import Image from 'next/image';
import Link from 'next/link';

function Card(props) {
  const { id, name, link, github, description, image } = props;
  return (
    <div className="w-full max-w-3xl overflow-hidden bg-white rounded-md shadow-md">
      <div className="rounded-md">
        <Image
          src={image}
          alt={name}
          width={1000}
          height={500}
          className="object-cover object-center"
        />
      </div>
      <div className="flex items-center justify-between px-2 pb-2">
        <h3 className="text-sm font-semibold text-gray-700">{name}</h3>
        <div>
          <a href={link} target="_blank" rel="noreferrer">
            <i className="text-xs text-gray-600 duration-300 cursor-pointer fa-solid fa-eye hover:text-gray-700"></i>
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <i className="mx-2 text-xs text-gray-600 duration-300 fa-brands fa-github hover:text-gray-700"></i>
          </a>
          <Link href={`/portfolio/${id}`} passHref={true}>
            <i className="text-xs text-gray-600 duration-300 cursor-pointer fa-solid fa-circle-info hover:text-gray-700"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
