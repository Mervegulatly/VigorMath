import React from 'react';
import "./button.css";

type InputProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function Button({onClick}: InputProps) {
  return (
    <button className="button" onClick={onClick} >Giriş Yap</button>
  )
}

export default Button
