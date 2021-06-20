import { FC } from 'react';

const FormError: FC = ({ children }) => (
  <span role="alert" className="text-xs text-red-500 text-left mt-2">
    {children}
  </span>
);

export default FormError;
