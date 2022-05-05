import React from 'react';

function Footer() {
  return (
    <div className="relative py-4 text-center bg-pink-500/20">
      <span className="relative z-10">
        Built with <i className="fa-regular fa-heart"></i> | &copy; Mardini 2022
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0 left-0 w-full"
      >
        <path
          fill="rgba(255 255 255 / 0.20) "
          fillOpacity="1"
          d="M0,160L60,176C120,192,240,224,360,218.7C480,213,600,171,720,144C840,117,960,107,1080,112C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Footer;
