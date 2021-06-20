import { FC } from 'react';

type StatisticProp = {
  name: string;
  value: number;
};

const Statistic: FC<StatisticProp> = ({ name, value }) => {
  return (
    <div className="flex items-center my-2">
      <p className="w-1/5 md:w-2/6 font-medium text-xs">{name.toUpperCase()}</p>
      <div className="w-4/5 md:w-4/6">
        <span
          className="bg-blue-700 rounded-md h-2 block"
          style={{ maxWidth: `${value}%` }}
        ></span>
      </div>
    </div>
  );
};

export default Statistic;
