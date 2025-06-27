import './App.css';
import type { ReactNode } from 'react';
import Input from './components/input/Input';
import Button from './components/button/Button';
import Form from './components/form/Form';

function App() {

  return (
    <div className="App"> 
      <h2>Giriş Formu</h2>
      <Form>
        <Input type={"text"} />
        <Input />
        <Button />
      </Form>
    </div>
  )
}

export default App
