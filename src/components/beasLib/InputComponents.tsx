import Button from '@mui/material/Button';
import React, { ChangeEvent, MouseEvent } from 'react';
import { IoIosNotifications } from "react-icons/io"; 
import { ReactNode } from 'react';
interface ButtonComponentsProps {
  className?: string;
  type: "button" | "submit" | "reset";
  buttonName: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const ButtonComponents: React.FC<ButtonComponentsProps> = ({ className, type, buttonName, onClick }) => {
  return (
    <Button
      type={type}
      className={`${className} text-black`}
      onClick={onClick}
    >
      {buttonName}
    </Button>
  );
};

interface InputBoxComponentsProps {
  className?: string;
  label: string;
  value: string;
  type?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const InputBoxComponents: React.FC<InputBoxComponentsProps> = ({ className, label, value, onChange ,type}) => {
  return (
    <input
       className={className}
      value={value}
      type={type}
      onChange={onChange}
      required
      />
  );
};


interface SearchBoxComponentsProps {
  className?: string;
  label?: string;
  value: string;
  type?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBoxComponents: React.FC<SearchBoxComponentsProps> = ({ className, value, onChange, type }) => {
  return (
    <div className={`flex rounded-full border border-gray-300 bg-white  px-2 w-full max-w-[600px] ${className}`}>
     

      <input
        type={type || 'text'}
        className="w-full flex bg-transparent pl-2 text-[#cccccc] outline-0"
        value={value}
        onChange={onChange}
        placeholder="Search "
      />

      <button type="submit" className="relative p-2  rounded-full">
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
        </svg>
  </button>
</div>

);
}


interface NavButtonProps {
  icon: ReactNode;
}

export const NavButton = ({ icon }: NavButtonProps) => {
  return (
    <li className="hover:bg-gray-100">
      <a
        href="."
        className="h-16 px-6 flex justify-center items-center w-full focus:text-orange-500"
      >
        {icon}
      </a>
    </li>
  );
};