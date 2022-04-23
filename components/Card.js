import React from 'react';
import Image from 'next/image';

function Card(props) {
  const { name, image } = props;
  return (
    <div className="grid gap-2 p-1 bg-white rounded-md">
      <Image
        src={`http://${image}`}
        alt={name}
        width={400}
        height={300}
        className="object-cover object-center rounded-md"
      />
      <h2>{name}</h2>
    </div>
  );
}

export default Card;
