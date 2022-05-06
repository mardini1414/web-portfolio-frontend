function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center h-screen px-4 mx-auto bg-gradient-to-b from-white to-pink-500/20"
    >
      <h1 className="font-serif text-3xl font-black text-black sm:text-6xl md:text-7xl animate__animated animate__fadeInUp">
        Hi I{"'"}m Mardini
      </h1>
      <span className="font-semibold text-black animate__animated animate__fadeInUp animate__delay-1s">
        Web Developer
      </span>
    </section>
  );
}

export default Hero;
