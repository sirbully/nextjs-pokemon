import { FC } from 'react';

type ButtonProps = {
  type: 'submit' | 'button';
  color: 'red' | 'blue';
};

const Button: FC<ButtonProps> = ({ children, type, color }) => (
  <button
    className={`w-full border-2 border-black rounded-xl px-4 py-2 mt-4 focus:outline-none font-extrabold bg-${color}-500 hover:bg-${color}-600 text-white shadow-custom`}
    type={type}
  >
    {children}
  </button>
);

export default Button;
