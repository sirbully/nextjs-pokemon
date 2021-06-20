import { FC } from 'react';
import Image from 'next/image';

type ModalProps = {
  isVisible: boolean;
  onToggle: any;
  pokemon: any;
  pokemonId: number;
};

const Modal: FC<ModalProps> = ({ isVisible, onToggle, pokemon, pokemonId }) => {
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
            <div className="flex">
              {/* <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                layout="fixed"
                width={96}
                height={96}
              /> */}
              <div>
                <p>id</p>
                <p>name</p>
                <p>type</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
