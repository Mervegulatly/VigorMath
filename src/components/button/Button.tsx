import React from 'react';
import "./button.css";

<<<<<<< HEAD
type InputProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function Button({onClick}: InputProps) {
  return (
    <button className="button" onClick={onClick} >Giriş Yap</button>
=======
function Button() {
  return (
    <button className="button">Giriş Yap</button>
>>>>>>> origin/master
  )
}

export default Button
