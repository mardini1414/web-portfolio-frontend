import React from 'react';

function Contact() {
  return (
    <section
      id="contact"
      className="flex items-center justify-center h-80 bg-gradient-to-t from-pink-500/20 to-white"
    >
      <div>
        <h2 className="text-center">Let&apos;s talk!</h2>
        <div className="flex items-center justify-center gap-8 mt-8">
          <i className="text-2xl fa-regular fa-envelope"></i>
          <i className="text-2xl fa-brands fa-whatsapp"></i>
          <i className="text-2xl fa-brands fa-facebook"></i>
          <i className="text-2xl fa-brands fa-instagram"></i>
        </div>
      </div>
    </section>
  );
}

export default Contact;
