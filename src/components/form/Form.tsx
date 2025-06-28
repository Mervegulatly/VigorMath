import type { ReactNode } from 'react';
import "./form.css";

type FormProps = {
  children: ReactNode;
};

function Form({ children }: FormProps) {
  return (
    <div className="form">
      {children}
      <a href="" className='login-link login-link--forgot-password' >Şifremi Unuttum</a>
      <a href="" className='login-link login-link--help'  >Yardım</a>
    </div>
  );
}

export default Form;
