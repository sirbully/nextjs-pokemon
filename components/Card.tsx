import { FC } from 'react';
import Image from 'next/image';
import Pill from './Pill';

const capitalize = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const padded = (number: number) => ('000' + number).slice(-3);

type CardProps = {
  id: number;
  name: string;
  image: string;
  types: Array<any>;
};

const Card: FC<CardProps> = ({ id, name, image, types }) => (
  <div className="rounded-2xl border-2 border-black shadow-custom p-8 mb-4 flex flex-col justify-center items-center hover:bg-gray-100 cursor-pointer">
    <div className="relative w-full flex justify-center">
      <p
        className="absolute -top-7 text-gray-300 font-extrabold"
        style={{ fontSize: '100px' }}
      >
        #{padded(id)}
      </p>
      <Image src={image} alt={name} layout="fixed" width={96} height={96} />
    </div>
    <h1>{capitalize(name)}</h1>
    <div className="flex mt-2">
      {types.map(type => (
        <Pill key={type.slot} type={type.type.name} />
      ))}
    </div>
  </div>
);

export default Card;
