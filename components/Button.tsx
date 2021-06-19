import { FC } from 'react';

type ButtonProps = {
  type: 'submit' | 'button';
};

const Button: FC<ButtonProps> = ({ children, type }) => (
  <button
    className="w-full border-2 border-black rounded-xl px-4 py-2 mt-4 focus:outline-none font-extrabold bg-red-500 hover:bg-red-600 text-white shadow-custom"
    type={type}
  >
    {children}
  </button>
);

export default Button;
