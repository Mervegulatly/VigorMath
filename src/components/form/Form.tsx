import type { ReactNode } from 'react';
import "./form.css";

type FormProps = {
  children: ReactNode;
};

function Form({ children }: FormProps) {
  return (
    <div className="form">
      {children}
<<<<<<< HEAD
=======
      <a href="" className='sifremiUnuttum'  >Sifremi Unuttum</a>
      <a href="" className='yardim'  >Yardim</a>
>>>>>>> origin/master
    </div>
  );
}

export default Form;
