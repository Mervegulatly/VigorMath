
const navItems = ['Misyon', 'Vizyon', 'Bize Ulaşın', 'Login'];
const sidebarItems = ['Geçmiş Veriler', 'Aylık Enerji Kullanımı', 'Tahminler', 'Öneriler'];

/**
 * Creates the HTML of the Header component.
 * @param {string[]} items - List of navigation links.
 * @returns {string} Header HTML.
 */
function createHeader(items) {
  return `
    <header>
      <nav>
        ${items.map(item => `<a href="#">${item}</a>`).join('')}
      </nav>
      <h1>Başlık ve Slogan<br>Enerji Yönetiminde Yeni Bir Dönem</h1>
      <p>IoT Entegrasyonu Açıklaması, Kurumlardan Sağladığı Fayda, Yenilenebilir Enerji</p>
    </header>
  `;
}

/**
 * Creates the HTML of the Sidebar component.
 * @param {string[]} items - List of Sidebar menu items.
 * @returns {string} Sidebar HTML.
 */
function createSidebar(items) {
  return `
    <div class="sidebar">
      <p>Kollayıcı</p>
      <ul>
        ${items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  `;
}

/**
 * Creates the HTML of the main content component.
 * @returns {string} Content HTML.
 */
function createContent() {
  return `
    <div class="content">
      <h3>Geçmiş Veriler</h3>
      <p>[Grafik Alanı]</p>
      <h3>Yenilenebilir Enerji</h3>
      <p>[Metin ve grafik]</p>
      <footer>
        <a href="#">İletişim</a> | 
        <a href="#">Sosyal Medya</a> | 
        <a href="#">KVKK</a> | 
        <a href="#">Yasal Bilgiler</a>
      </footer>
    </div>
  `;
}

/**
 * Creates the Main Panel component (containing sidebar and content).
 * @returns {string} Panel HTML.
 */
function createPanel() {
  return `
    <div class="panel">
      ${createSidebar(sidebarItems)}
      ${createContent()}
    </div>
  `;
}


export function showHome() { // This prevents the content from being added again each time the function is called.
  document.body.innerHTML = ''; 

  // Create a main container (wrapper). It's cleaner to put the whole page inside it.
  const appContainer = document.createElement('div');
  appContainer.id = 'app-container';

  // Combine components to create the HTML of the entire page.
  appContainer.innerHTML = `
    ${createHeader(navItems)}
    ${createPanel()}
  `;
  
  document.body.appendChild(appContainer);   // Improves performance by enabling less redrawing of the DOM.
}