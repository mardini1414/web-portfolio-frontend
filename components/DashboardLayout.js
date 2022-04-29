import DashboardDropdown from './DashboardDropdown';
import Link from 'next/link';

function DashboardLayout({ children }) {
  return (
    <div>
      <header>
        <nav className="container fixed top-0 z-10 flex justify-between w-full px-4 py-3 mx-auto bg-white shadow-sm">
          <Link href={'/dashboard'}>
            <a>
              <h1 className="text-lg font-semibold text-blue-500">Dashboard</h1>
            </a>
          </Link>
          <DashboardDropdown />
        </nav>
      </header>
      <main className="container px-4 mx-auto bg-blue-50">{children}</main>
    </div>
  );
}

export default DashboardLayout;
