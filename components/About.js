import Terminal from './Terminal';
import ProfileCard from './ProfileCard';

function About() {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center h-screen px-4 mx-auto lg:flex-row bg-gradient-to-t from-blue-500/20 to-pink-500/20"
    >
      <div className="flex flex-col-reverse items-center justify-center lg:flex-row about-wrapper">
        <ProfileCard />
        <Terminal />
      </div>
    </section>
  );
}

export default About;
