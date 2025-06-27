import React from 'react';
import "./input.css";

type InputProps = {
  type?: string; // opsiyonel, ya da zorunlu yapabilirsin
};

const Input = ({ type = "text" }: InputProps) => {  //It will be defined as Component, so it is defined with a capital letter(Input)
  return (
    <input type={type} className = "input" />
  )
}

export default Input


