import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 text-black bg-white shadow-sm">
      <h1 className="text-xl font-medium md:text-2xl">Mardini</h1>
      <MobileMenu />
      <DesktopMenu />
    </nav>
  );
}

export default Navbar;
