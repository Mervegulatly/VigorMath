import React from 'react';
import "./input.css";

type InputProps = {
  type?: string; // opsiyonel, ya da zorunlu yapabilirsin
};

const Input = ({ type = "text" }: InputProps) => {  //It will be defined as Component, so it is defined with a capital letter(Input)
  return (
    <div className="input-wrapper">
      <h2>Login</h2>
      <input placeholder='Kullanıcı Adı' type={type} className="input" />
      <input placeholder='Şifre' type={type} className="input" />
    </div>
  )
}

export default Input


