import Card from './Card';
import { useState } from 'react';

function Portfolio({ data }) {
  const [more, setMore] = useState(false);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 mx-auto h-max bg-gradient-to-b from-blue-500/20 to-white">
      <h2 className="my-4 font-serif text-3xl font-black text-black sm:text-6xl md:text-7xl">
        Portfolio
      </h2>
      <div className="grid grid-cols-1 mt-4 gap-y-6">
        {more
          ? data.map((el, index) => {
              if (index < data.length) {
                return (
                  <Card
                    key={el.id}
                    name={el.name}
                    image={el.image}
                    link={el.link}
                    github={el.github}
                  />
                );
              }
            })
          : data.map((el, index) => {
              if (index < 3) {
                return (
                  <Card
                    key={el.id}
                    name={el.name}
                    image={el.image}
                    link={el.link}
                    github={el.github}
                  />
                );
              }
            })}
      </div>
      <button
        className="px-6 py-1 mt-8 text-white transition duration-300 bg-orange-500 rounded-md focus:outline-none hover:bg-orange-400"
        onClick={() => setMore(!more)}
      >
        {more ? 'Show less' : 'Show more'}
      </button>
    </section>
  );
}

export default Portfolio;
