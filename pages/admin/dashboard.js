import axios from 'axios';
import { useEffect } from 'react';
import DashboardLayout from '../../components/DashboardLayout';

function dashboard() {
  // useEffect(() => {
  //   axios
  //     .get('/api/user', {
  //       headers: {
  //         Authorization: 'Bearer 6|hazBPbeiYZ6p8eWTI3Pkgk474u8iYvNUsmWojxu3',
  //       },
  //     })
  //     .then((res) => console.log(res.data));
  // }, []);
  return <DashboardLayout>dashboard</DashboardLayout>;
}

export default dashboard;
