import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function DashboardCard(props) {
  const { id, name, image } = props;
  return (
    <div className="grid gap-2 p-2 bg-white rounded-md shadow-sm">
      <Image
        src={image}
        alt={name}
        width={400}
        height={300}
        className="object-cover object-center rounded-md"
      />
      <div className="flex items-center justify-between">
        <h2 className="font-sans font-semibold text-green-400">{name}</h2>
        <Link href={`/dashboard/portfolio/${id}`}>
          <a>
            <i className="text-gray-500 fa-solid fa-gear"></i>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default DashboardCard;
