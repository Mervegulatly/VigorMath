<<<<<<< HEAD
// App.tsx
import './App.css';
import LoginPage from './pages/LoginPage';

function App() {
  return <LoginPage />;
}

export default App;
=======
import './App.css';
import type { ReactNode } from 'react';
import Input from './components/input/Input';
import Button from './components/button/Button';
import Form from './components/form/Form';

function App() {

  return (
    <div className="App">
      <Form>
        <Input type={"text"} />
        <Button />
      </Form>
    </div>
  )
}

export default App
>>>>>>> origin/master
