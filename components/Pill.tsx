import { FC } from 'react';

type PillProps = {
  type: string;
};

const Pill: FC<PillProps> = ({ type }) => {
  return <div className={`text-xs py-1 px-2 ${type}-bg mx-1 text-white font-medium rounded-md`}>{type.toUpperCase()}</div>;
};

export default Pill;
