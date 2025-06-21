export function showLogin(onLoginSuccess) {
    // If a login box already exists, remove it before recreating it
  const existingLoginBox = document.getElementById('login-box-container');
  if (existingLoginBox) {
    existingLoginBox.remove();
  }
 // Create a container element
  const container = document.createElement('div');
  container.id = 'login-box-container';
  container.className = 'login-box'; // Keep the original class for CSS styling.

  // defines HTML structure in a more readable way by using Template literal 
  container.innerHTML = `
    <form id="login-form">
      <h2>Login</h2>
      <div class="input-group">
        <input type="text" id="username" placeholder="Kullanıcı Adı" required>
      </div>
      <div class="input-group">
        <input type="password" id="password" placeholder="Şifre" required>
      </div>
      <button type="submit">Giriş Yap</button>
      <p class="login-links">
        <a href="#">Şifremi Unuttum</a> | <a href="#">Yardım</a>
      </p>
    </form>
  `;

   // Adds the created container to body
  document.body.appendChild(container);

  // Provides access to form and input elements
  const loginForm = container.querySelector('#login-form');
  const usernameInput = container.querySelector('#username');
  const passwordInput = container.querySelector('#password');

  // This ensures that the form is also submitted when the 'Enter' key is pressed.
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();   // Prevents the default submit behavior of the form (page not renewed)

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username && password) {
      container.remove();   // Remove input box
      onLoginSuccess();     // Call the successful login callback
    } else {
      alert('Lütfen kullanıcı adı ve şifre giriniz!');
    }
  });

  usernameInput.focus();   // Autofocus on username field to improve user experience
}