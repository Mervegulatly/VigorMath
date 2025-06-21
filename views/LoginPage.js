// LoginPage.js
export function showLogin(onLoginSuccess) {
  const body = document.body;

  // Yardımcı fonksiyon: element oluşturup opsiyonel özellikler atar
  const createElem = (tag, { className, id, type, placeholder, href, text, html } = {}) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (id) el.id = id;
    if (type) el.type = type;
    if (placeholder) el.placeholder = placeholder;
    if (href) el.href = href;
    if (text) el.textContent = text;
    if (html) el.innerHTML = html;
    return el;
  };

  const loginBox = createElem('div', { className: 'login-box', id: 'login-box' });

  const h2Login = createElem('h2', { text: 'Login' });
  loginBox.appendChild(h2Login);

  const inputUser = createElem('input', { type: 'text', placeholder: 'Kullanıcı Adı', id: 'username' });
  loginBox.appendChild(inputUser);

  const inputPass = createElem('input', { type: 'password', placeholder: 'Şifre', id: 'password' });
  loginBox.appendChild(inputPass);

  const button = createElem('button', { text: 'Giriş Yap' });
  loginBox.appendChild(button);

  const pLoginLinks = createElem('p');

  const linkForgot = createElem('a', { href: '#', text: 'Şifremi Unuttum' });
  pLoginLinks.appendChild(linkForgot);

  pLoginLinks.appendChild(document.createTextNode(' | '));

  const linkHelp = createElem('a', { href: '#', text: 'Yardım' });
  pLoginLinks.appendChild(linkHelp);

  loginBox.appendChild(pLoginLinks);

  body.appendChild(loginBox);

  button.addEventListener('click', () => {
    const username = inputUser.value.trim();
    const password = inputPass.value.trim();

    if (username && password) {
      loginBox.remove();      // Giriş kutusunu kaldır
      onLoginSuccess();       // HomePage'i başlat
    } else {
      alert('Lütfen kullanıcı adı ve şifre giriniz!');
    }
  });
}