import { FC } from 'react';
import Image from 'next/image';
import Pill from './Pill';
import { capitalize, padded } from '@/utils/string-utils';

type CardProps = {
  id: number;
  name: string;
  image: string;
  types: Array<any>;
  onClick: (id: number) => void;
};

const Card: FC<CardProps> = ({ id, name, image, types, onClick }) => (
  <div
    className="rounded-2xl border-2 border-black shadow-custom p-8 mb-4 flex flex-col justify-center items-center hover:bg-gray-100 cursor-pointer"
    onClick={() => onClick(id)}
  >
    <div className="relative w-full flex justify-center">
      <p className="absolute lg:top-0 md:top-3 text-gray-300 font-extrabold lg:text-8xl md:text-7xl text-8xl">
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
