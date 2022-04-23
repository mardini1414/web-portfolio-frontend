import Link from 'next/link';
import DashboardDropdown from './DashboardDropdown';

function DashboardLayout({ children }) {
  return (
    <div className="bg-blue-100 ">
      <header>
        <nav className="container fixed top-0 z-10 flex justify-between w-full px-4 py-3 mx-auto bg-blue-500">
          <h1 className="text-lg font-semibold text-white">My Dashboard</h1>
          <DashboardDropdown />
        </nav>
      </header>
      <main className="container px-4 mx-auto">{children}</main>
    </div>
  );
}

export default DashboardLayout;
