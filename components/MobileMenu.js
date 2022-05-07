import { Menu } from '@headlessui/react';
import axios from 'axios';

function MobileMenu() {
  function scroll(id) {
    const el = document.getElementById(id);
    el.scrollIntoView({ behavior: 'smooth' });
  }

  async function download() {
    const res = await axios.get('api/download/cv', {
      responseType: 'blob',
      headers: { Accept: 'application/pdf' },
    });
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'mycv.pdf');
    document.body.appendChild(link);
    link.click();
  }

  return (
    <div className="z-30 md:hidden">
      <Menu>
        <Menu.Button>
          <i className="text-lg text-black fa-solid fa-bars"></i>
        </Menu.Button>
        <Menu.Items className="absolute top-0 left-0 z-50 flex flex-col w-full h-screen gap-2 text-center bg-gradient-to-b from-white to-pink-500/10 backdrop-blur-sm">
          <Menu.Item>
            <Menu.Button className="p-4 text-right">
              <i className="text-2xl text-black fa-solid fa-times"></i>
            </Menu.Button>
          </Menu.Item>
          <Menu.Item>
            <div
              className="px-4 py-1 font-semibold"
              onClick={() => scroll('hero')}
            >
              Home
            </div>
          </Menu.Item>
          <Menu.Item>
            <div
              className="px-4 py-1 font-semibold"
              onClick={() => scroll('about')}
            >
              About
            </div>
          </Menu.Item>
          <Menu.Item>
            <div
              className="px-4 py-1 font-semibold"
              onClick={() => scroll('portfolio')}
            >
              Portfolio
            </div>
          </Menu.Item>
          <Menu.Item>
            <div
              className="px-4 py-1 font-semibold"
              onClick={() => scroll('contact')}
            >
              Contact
            </div>
          </Menu.Item>
          <Menu.Item>
            <div className="px-4 py-1">
              <button
                className="px-4 py-1 bg-orange-500 rounded-md text-blue-50"
                onClick={download}
              >
                <i className="text-xs fa-solid fa-download"></i> download cv
              </button>
            </div>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
}

export default MobileMenu;
