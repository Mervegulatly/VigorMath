import { showLogin } from './views/LoginPage.js';
import { showHome } from './views/HomePage.js';

window.onload = () => {
  showLogin(showHome); // Başlangıçta login ekranı gösterilsin
};