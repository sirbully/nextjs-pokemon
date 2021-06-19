import { FC } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';

type InputProps = {
  register: UseFormRegister<any>;
  label: Path<any>;
  type: string;
  required?: boolean;
};

const Input: FC<InputProps> = ({ register, label, type, required }) => (
  <input
    className="w-full border-2 border-black rounded-xl px-4 py-2 mt-4 focus:outline-none"
    type={type}
    placeholder={label}
    {...register(label, { required: required || false })}
  />
);

export default Input;
