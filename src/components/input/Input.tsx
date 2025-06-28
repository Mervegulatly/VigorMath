import React from 'react';
import "./input.css";

type InputProps = {
  type?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

const Input = ({ type = "text", placeholder, onChange, value }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className="input-wrapper"
    />
  );
}

export default Input;
