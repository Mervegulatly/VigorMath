import React from 'react';
import "./input.css";

type InputProps = {
<<<<<<< HEAD
  type?: string; // You can make it optional or necessary.
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; //onChange must be a function, not a string type
  value?: string;
};

const Input = ({ type, placeholder, onChange, value }: InputProps) => {  //It will be defined as Component, so it is defined with a capital letter(Input)
  return (
    <input type={type} placeholder={placeholder} onChange={onChange} value={value} className="input" />
=======
  type?: string; // opsiyonel, ya da zorunlu yapabilirsin
};

const Input = ({ type = "text" }: InputProps) => {  //It will be defined as Component, so it is defined with a capital letter(Input)
  return (
    <div className="input-wrapper">
      <h2>Login</h2>
      <input placeholder='Kullanıcı Adı' type={type} className="input" />
      <input placeholder='Şifre' type={type} className="input" />
    </div>
>>>>>>> origin/master
  )
}

export default Input


