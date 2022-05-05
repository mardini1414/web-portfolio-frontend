import Image from 'next/image';
import Link from 'next/link';

function Card(props) {
  const { id, name, link, github, description, image } = props;
  return (
    <div className="w-full overflow-hidden bg-white rounded-md shadow-md">
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
        <h3 className="text-gray-700">{name}</h3>
        <div>
          <Link href={`/portfolio/${id}`} passHref={true}>
            <i className="text-xs text-gray-400 cursor-pointer fa-solid fa-eye"></i>
          </Link>
          <a href={link} target="_blank" rel="noreferrer">
            <i className="mx-2 text-xs text-gray-400 fa-solid fa-link"></i>
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <i className="text-xs text-gray-400 fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
