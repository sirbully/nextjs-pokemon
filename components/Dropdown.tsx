import { FC, useState } from 'react';

type DropdownProps = {
  label: React.ReactNode;
  options: Array<Record<string, any>>;
};

const Dropdown: FC<DropdownProps> = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  return (
    <div className="relative">
      <button
        className={`rounded-full border-2 border-black w-10 h-10 hover:bg-yellow-400 ${
          isOpen ? 'bg-yellow-400' : ''
        } focus:outline-none`}
        onClick={toggleDropdown}
      >
        {label}
      </button>
      <ul
        className={`w-48 py-2 mt-2 absolute right-0 list-none bg-white border-2 border-black rounded-lg shadow-custom ${
          isOpen ? '' : 'hidden'
        }`}
      >
        {options.map(option => (
          <li
            key={option.name}
            className="px-4 py-2 block font-bold cursor-pointer hover:bg-yellow-400"
            onClick={option.onClick}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
