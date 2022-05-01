import { Menu } from '@headlessui/react';

function MobileMenu() {
  return (
    <div className="md:hidden">
      <Menu>
        <Menu.Button>
          <i className="text-lg text-black fa-solid fa-bars"></i>
        </Menu.Button>
        <Menu.Items className="absolute top-0 left-0 flex flex-col w-full h-screen gap-2 text-center bg-gradient-to-b from-white to-pink-500/10 backdrop-blur-sm">
          <Menu.Item>
            <Menu.Button className="p-4 text-right">
              <i className="text-lg text-black fa-solid fa-times"></i>
            </Menu.Button>
          </Menu.Item>
          <Menu.Item>
            <div className="px-4 py-1 font-semibold">Home</div>
          </Menu.Item>
          <Menu.Item>
            <div className="px-4 py-1 font-semibold">About</div>
          </Menu.Item>
          <Menu.Item>
            <div className="px-4 py-1 font-semibold">Portfolio</div>
          </Menu.Item>
          <Menu.Item>
            <div className="px-4 py-1 font-semibold">Contact</div>
          </Menu.Item>
          <Menu.Item>
            <div className="px-4 py-1">
              <button className="px-4 py-1 bg-orange-500 rounded-md text-blue-50">
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
