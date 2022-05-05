import Card from './Card';
import Link from 'next/link';

function Portfolio({ data }) {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 mx-auto h-max bg-gradient-to-b from-blue-500/20 to-white">
      <h2 className="my-4 font-serif text-3xl font-black text-black sm:text-4xl md:text-6xl">
        Portfolio
      </h2>
      <div className="grid grid-cols-1 gap-12 mt-4 sm:gap-14 md:gap-y-16">
        {data.map((el, index) => {
          if (index < 3) {
            return (
              <Card
                key={el.id}
                id={el.id}
                name={el.name}
                image={el.image}
                link={el.link}
                github={el.github}
              />
            );
          }
        })}
      </div>
      <Link href={'/portfolio'} passHref={true}>
        <button className="px-6 py-1 mt-8 text-white transition duration-300 bg-orange-500 rounded-md focus:outline-none hover:bg-orange-400">
          Show more
        </button>
      </Link>
    </section>
  );
}

export default Portfolio;
