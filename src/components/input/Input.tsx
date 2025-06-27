import React from 'react';
import "./input.css";

type InputProps = {
  type?: string; // You can make it optional or necessary.
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; //onChange must be a function, not a string type
  value?: string;
};

const Input = ({ type, placeholder, onChange, value }: InputProps) => {  //It will be defined as Component, so it is defined with a capital letter(Input)
  return (
    <input type={type} placeholder={placeholder} onChange={onChange} value={value} className="input" />
  )
}

export default Input


