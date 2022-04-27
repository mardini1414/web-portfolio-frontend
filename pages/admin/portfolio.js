import DashboardLayout from '../../components/DashboardLayout';
import DashboardCard from '../../components/DashboardCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

function portfolio() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const res = await axios.get('api/portfolio');
      setData(res.data.data);
    } catch (error) {
      alert('Oops something when wrong!');
    }
  }

  return (
    <DashboardLayout>
      <div className="py-10"></div>
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

export default portfolio;
