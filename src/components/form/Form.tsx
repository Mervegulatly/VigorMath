import type { ReactNode } from 'react';
import "./form.css";

type FormProps = {
  children: ReactNode;
};

function Form({ children }: FormProps) {
  return (
    <div className="form">
      {children}
    </div>
  );
}

export default Form;
