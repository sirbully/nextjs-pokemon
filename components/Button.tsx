import { FC } from 'react';

type ButtonProps = {
  type: 'submit' | 'button';
  color: 'red' | 'blue';
  disabled: boolean;
};

const Button: FC<ButtonProps> = ({ children, type, color, disabled }) => (
  <button
    className={`w-full border-2 border-black rounded-xl px-4 py-2 mt-4 focus:outline-none font-extrabold bg-${color}-500 hover:bg-${color}-600 text-white shadow-custom disabled:opacity-50`}
    type={type}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
