import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';

function DashboardCard(props) {
  const router = useRouter();
  const { id, name, image } = props;

  async function remove(id) {
    const res = await axios.post(
      `/api/portfolio/delete/${id}`,
      { _method: 'delete' },
      {
        headers: {
          Authorization: `Bearer  ${localStorage.getItem('user_token')}`,
        },
      }
    );
    if (res.status === 200) router.push('/dashboard/portfolio');
  }

  return (
    <div className="grid gap-2 p-2 bg-white rounded-md shadow-sm h-80">
      <Image
        src={image}
        alt={name}
        width={400}
        height={300}
        className="object-cover object-center rounded-md"
      />
      <div className="flex items-center justify-between">
        <h2 className="font-sans font-semibold text-green-400">{name}</h2>
        <div className="flex gap-4">
          <Link href={`/dashboard/portfolio/${id}`}>
            <a>
              <i className="text-gray-500 fa-solid fa-gear"></i>
            </a>
          </Link>
          <div className="cursor-pointer" onClick={() => remove(id)}>
            <i className="text-red-500 fa-solid fa-trash"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;
