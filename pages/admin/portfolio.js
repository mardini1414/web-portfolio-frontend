import DashboardLayout from '../../components/DashboardLayout';
import DashboardCard from '../../components/DashboardCard';
import Link from 'next/link';
import axios from 'axios';

export async function getServerSideProps(context) {
  const res = await axios.get('api/portfolio');
  return {
    props: {
      data: res.data.data,
    },
  };
}

function Portfolio({ data }) {
  return (
    <DashboardLayout>
      <div className="py-10"></div>
      <div className="mb-6">
        <Link href={'/dashboard/portfolio/create'}>
          <a className="px-5 py-2 mt-2 text-white transition duration-300 bg-green-500 rounded-sm focus:outline-none hover:bg-green-400">
            <i className="fa-solid fa-plus"></i> Add portfolio
          </a>
        </Link>
      </div>
      <div className="grid min-h-screen grid-cols-1 sm:grid-cols-3 gap-y-3 sm:gap-x-3 h-max">
        {data.map((el) => {
          return (
            <DashboardCard
              key={el.id}
              id={el.id}
              name={el.name}
              image={el.image}
            />
          );
        })}
      </div>
      <div className="py-10"></div>
    </DashboardLayout>
  );
}

export default Portfolio;
