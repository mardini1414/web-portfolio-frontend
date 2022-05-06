import Terminal from './Terminal';
import ProfileCard from './ProfileCard';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function About() {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center h-screen px-4 pt-6 mx-auto lg:flex-row bg-gradient-to-t from-blue-500/20 to-pink-500/20"
    >
      <div className="flex flex-col-reverse items-center justify-center lg:flex-row about-wrapper">
        <AnimationOnScroll
          delay={500}
          className="z-10"
          animateIn="animate__fadeInUp"
        >
          <ProfileCard />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <Terminal />
        </AnimationOnScroll>
      </div>
    </section>
  );
}

export default About;
