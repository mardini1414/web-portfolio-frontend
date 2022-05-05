function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center h-screen px-4 mx-auto bg-gradient-to-b from-white to-pink-500/20"
    >
      <h1 className="font-serif text-3xl font-black text-black sm:text-6xl md:text-7xl">
        Hi I{"'"}m Mardini
      </h1>
      <span className="font-normal text-black/75">Web Developer</span>
    </section>
  );
}

export default Hero;
