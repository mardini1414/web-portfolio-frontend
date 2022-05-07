import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="fixed z-20 flex items-center justify-between w-full p-4 text-black bg-white shadow">
      <Link href="/">
        <a>
          <h1 className="font-serif text-xl font-semibold text-orange-500 md:text-2xl">
            M
          </h1>
        </a>
      </Link>
      <MobileMenu />
      <DesktopMenu />
    </nav>
  );
}

export default Navbar;
