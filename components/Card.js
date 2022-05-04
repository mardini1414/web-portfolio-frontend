import Image from 'next/image';

function Card(props) {
  const { name, link, github, description, image } = props;
  return (
    <div className="w-full overflow-hidden bg-white rounded-md shadow-xl">
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
        <h3 className="text-orange-500">{name}</h3>
        <div>
          <i className="fa-solid fa-eye"></i>
          <a href={link} target="_blank">
            <i className="mx-2 fa-solid fa-link"></i>
          </a>
          <a href={github} target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
