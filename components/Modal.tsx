import { FC } from 'react';
import Image from 'next/image';
import Pill from './Pill';
import Statistic from './Statistic';
import { capitalize, padded } from '@/utils/string-utils';

type ModalProps = {
  isVisible: boolean;
  onToggle: any;
  pokemon: any;
};

const Modal: FC<ModalProps> = ({ isVisible, onToggle, pokemon }) => {
  const renderModal = () => {
    if (pokemon !== null) {
      return (
        <>
          <div className="flex items-center">
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              layout="fixed"
              width={96}
              height={96}
            />
            <div className="ml-2">
              <p className="text-xs text-gray-500 font-medium">
                #{padded(pokemon.id)}
              </p>
              <h1 className="text-xl font-extrabold">
                {capitalize(pokemon.name)}
              </h1>
              <div className="flex mt-2">
                {pokemon.types.map(type => (
                  <Pill key={type.slot} type={type.type.name} />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-2 mb-4 px-4">
            <h2 className="mb-2">Base Stats</h2>
            {pokemon.stats.map(stat => (
              <Statistic
                key={stat.stat.name}
                name={stat.stat.name}
                value={stat.base_stat}
              />
            ))}
          </div>
        </>
      );
    }
  };

  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${
        isVisible ? '' : 'hidden'
      }`}
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <button
              className="fixed right-6 w-8 h-8 rounded-full border-2 border-black shadow-custom-small focus:outline-none font-bold"
              onClick={() => onToggle(false)}
            >
              x
            </button>
            {renderModal()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
