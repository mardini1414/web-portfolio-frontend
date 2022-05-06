import { AnimationOnScroll } from 'react-animation-on-scroll';

function Contact() {
  return (
    <section
      id="contact"
      className="flex items-center justify-center h-80 bg-gradient-to-t from-pink-500/20 to-white"
    >
      <div className="relative z-10">
        <h2 className="text-center">Let&apos;s talk!</h2>
        <div className="flex items-center justify-center gap-8 mt-8">
          <AnimationOnScroll animateIn="animate__zoomIn">
            <a
              href="mailto:mardini1414@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="text-2xl fa-regular fa-envelope"></i>
            </a>
          </AnimationOnScroll>
          <AnimationOnScroll delay={100} animateIn="animate__zoomIn">
            <a
              href="https://wa.me/+6281385501120"
              target="_blank"
              rel="noreferrer"
            >
              <i className="text-2xl fa-brands fa-whatsapp"></i>
            </a>
          </AnimationOnScroll>
          <AnimationOnScroll delay={200} animateIn="animate__zoomIn">
            <a
              href="https://facebook.com/mardini.mardini.986"
              target="_blank"
              rel="noreferrer"
            >
              <i className="text-2xl fa-brands fa-facebook"></i>
            </a>
          </AnimationOnScroll>
          <AnimationOnScroll delay={300} animateIn="animate__zoomIn">
            <a
              href="https://instagram.com/mardini1414"
              target="_blank"
              rel="noreferrer"
            >
              <i className="text-2xl fa-brands fa-instagram"></i>
            </a>
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
}

export default Contact;
