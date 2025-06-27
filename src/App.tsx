import './App.css';
import { useState, type ReactNode } from 'react';
import Input from './components/input/Input';
import Button from './components/button/Button';
import Form from './components/form/Form';

function App() {

  const [user, setUser] = useState({name:"", password:""});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.type==="text"){
      setUser ({ ...user, name : e.target.value }); //name update
      console.log(user);
    }else if(e.target.type==="password"){
      setUser ({ ...user, password : e.target.value }); //password update
      console.log(user);
    }
  }
  const handleClick = () => {
    if(user.name===""){
      alert("Lütfen bir kullanıcı adı giriniz!")
    }else if(user.password===""){
      alert("Lütfen bir şifre giriniz!");
    }else{
      alert("kullanıcı adınız: "+user.name+"Şifreniz"+user.password)
    }
  }

  return (
    <div className="App"> 
      <h2>Giriş Formu</h2>
      <Form>
        <Input type={"text"} value={user.name} placeholder={"Kullanıcı adı"} onChange={handleChange} />
        <Input type={"password"} value={user.password} placeholder={"Şifre"} onChange={handleChange}/>
        <Button onClick={handleClick} />
      </Form>
    </div>
  )
}

export default App
