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