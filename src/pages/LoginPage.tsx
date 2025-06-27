// export function setupLogin(onLoginSuccess) {
//   const loginForm = document.getElementById('login-form');
//   const usernameInput = document.getElementById('username');
//   const passwordInput = document.getElementById('password');

//   if (!loginForm || !usernameInput || !passwordInput) {
//     console.error('Login form bileşenleri bulunamadı!');
//     return;
//   }

//   loginForm.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const username = usernameInput.value.trim();
//     const password = passwordInput.value.trim();

//     if (username && password) {
//       document.getElementById('login-box-container').remove();
//       onLoginSuccess(); // örn. ana sayfayı göster
//     } else {
//       alert('Lütfen kullanıcı adı ve şifre giriniz!');
//     }
//   });

//   usernameInput.focus(); 
// }

// src/pages/LoginPage.tsx

import { useState } from 'react';
import Input from '../components/input/Input';
import Button from '../components/button/Button';
import Form from '../components/form/Form';

const LoginPage = () => {
  const [user, setUser] = useState({ name: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { type, value } = e.target;
    if (type === "text") {
      setUser(prev => ({ ...prev, name: value }));
    } else if (type === "password") {
      setUser(prev => ({ ...prev, password: value }));
    }
  };

  const handleClick = () => {
    if (user.name === "") {
      alert("Lütfen bir kullanıcı adı giriniz!");
    } else if (user.password === "") {
      alert("Lütfen bir şifre giriniz!");
    } else {
      alert(`Kullanıcı adınız: ${user.name}\nŞifreniz: ${user.password}`);
    }
  };

  return (
    <div className="App">
      <h2>Giriş Formu</h2>
      <Form>
        <Input
          type="text"
          value={user.name}
          placeholder="Kullanıcı adı"
          onChange={handleChange}
        />
        <Input
          type="password"
          value={user.password}
          placeholder="Şifre"
          onChange={handleChange}
        />
        <Button onClick={handleClick} />
      </Form>
    </div>
  );
};

export default LoginPage;
