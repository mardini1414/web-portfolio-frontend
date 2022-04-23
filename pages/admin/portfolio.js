import DashboardLayout from '../../components/DashboardLayout';
import Card from '../../components/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

function portfolio() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await axios.get('api/portfolio');
    console.log(res.data);
    setData(res.data.data);
  }

  return (
    <DashboardLayout>
      <div className="py-10"></div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-2 sm:gap-x-2">
        {data.map((el) => {
          return <Card key={el.id} name={el.name} image={el.image} />;
        })}
      </div>
    </DashboardLayout>
  );
}

export default portfolio;
