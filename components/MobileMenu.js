import { Menu } from '@headlessui/react';

function MobileMenu() {
  return (
    <div className="md:hidden">
      <Menu>
        <Menu.Button>
          <i className="text-lg text-black fa-solid fa-bars"></i>
        </Menu.Button>
        <Menu.Items className="absolute top-0 left-0 flex flex-col w-full h-screen gap-2 text-center bg-white shadow-md">
          <Menu.Item>
            <Menu.Button className="p-4 text-right">
              <i className="text-lg text-black fa-solid fa-times"></i>
            </Menu.Button>
          </Menu.Item>
          <Menu.Item>
            <div className="px-4 py-1">Home</div>
          </Menu.Item>
          <Menu.Item>
            <div className="px-4 py-1">About</div>
          </Menu.Item>
          <Menu.Item>
            <div className="px-4 py-1">Portfolio</div>
          </Menu.Item>
          <Menu.Item>
            <div className="px-4 py-1">Contact</div>
          </Menu.Item>
          <Menu.Item>
            <div className="px-4 py-1">
              <button className="px-4 py-1 bg-yellow-500 rounded-md text-blue-50">
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
