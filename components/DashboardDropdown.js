import { Menu } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import MyLink from './MyLink';
import axios from 'axios';

function DashboardDropdown() {
  const [name, setName] = useState('');
  const router = useRouter();

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const res = await axios.get('/api/user', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user_token')}`,
      },
    });

    if (!localStorage.getItem('user_token') || res.status === 401) {
      router.push('/login');
      setName('');
      localStorage.clear();
    } else {
      setName(res.data);
    }
  }

  async function logout() {
    const res = await axios.delete('/api/logout', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user_token')}`,
      },
    });
    if (res.status === 200) {
      localStorage.removeItem('user_token');
      router.push('/login');
    }
  }

  return (
    <Menu>
      <Menu.Button className="text-lg text-white">
        {name} <i className="text-sm fa-solid fa-angle-down"></i>
      </Menu.Button>
      <Menu.Items className="absolute grid gap-2 p-1 bg-white rounded-md shadow-md right-4 top-10">
        <Menu.Item>
          {({ active }) => (
            <MyLink
              href="/dashboard/portfolio"
              className={`rounded w-40 p-2 ${
                active ? 'text-white bg-blue-500' : 'bg-white text-blue-500'
              }`}
            >
              <i className="text-sm fa-solid fa-user-graduate"></i> Portfolio
            </MyLink>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <MyLink
              className={`rounded w-40 p-2 ${
                active ? 'text-white bg-blue-500' : 'bg-white text-blue-500'
              }`}
              href="/dashboard/mycv"
            >
              <i className="text-sm fa-solid fa-file-lines"></i> My cv
            </MyLink>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <div
              className={`rounded w-40 p-2 ${
                active ? 'text-white bg-red-500' : 'bg-white text-red-500'
              }`}
              onClick={logout}
            >
              <i className="text-sm fa-solid fa-arrow-right-from-bracket"></i>{' '}
              Logout
            </div>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

export default DashboardDropdown;
