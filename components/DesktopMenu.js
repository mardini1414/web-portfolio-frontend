import axios from 'axios';

function DesktopMenu() {
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
    <div className="hidden md:block">
      <ul className="flex items-center gap-4">
        <li>
          <div
            className="text-gray-400 duration-500 cursor-pointer hover:text-black hover:underline"
            onClick={() => scroll('hero')}
          >
            Home
          </div>
        </li>
        <li>
          <div
            className="text-gray-400 duration-500 cursor-pointer hover:text-black hover:underline"
            onClick={() => scroll('about')}
          >
            About
          </div>
        </li>
        <li>
          <div
            className="text-gray-400 duration-500 cursor-pointer hover:text-black hover:underline"
            onClick={() => scroll('portfolio')}
          >
            Portfolio
          </div>
        </li>
        <li>
          <div
            className="text-gray-400 duration-500 cursor-pointer hover:text-black hover:underline"
            onClick={() => scroll('contact')}
          >
            Contact
          </div>
        </li>
        <li>
          <div>
            <button
              className="px-2 py-1 text-xs text-white duration-500 bg-orange-500 rounded hover:bg-orange-400"
              onClick={download}
            >
              <i className="text-xs fa-solid fa-download"></i> download cv
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default DesktopMenu;
