// HomePage.js
export function showHome() {
  const body = document.body;

  // Yardımcı fonksiyon: element oluşturup, opsiyonel class ve text atama
  const createElem = (tag, { className, text, html } = {}) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text) el.textContent = text;
    if (html) el.innerHTML = html;
    return el;
  };

  // Header bölümü
  const header = createElem('header');
  const nav = createElem('nav');
  
  ['Misyon', 'Vizyon', 'Bize Ulaşın', 'Login'].forEach(text => {
    const a = createElem('a', { text });
    a.href = '#';
    nav.appendChild(a);
  });
  header.appendChild(nav);

  const h1 = createElem('h1', { html: 'Başlık ve Slogan<br>Enerji Yönetiminde Yeni Bir Dönem' });
  header.appendChild(h1);

  const pHeader = createElem('p', { text: 'IoT Entegrasyonu Açıklaması, Kurumlardan Sağladığı Fayda, Yenilenebilir Enerji' });
  header.appendChild(pHeader);

  body.appendChild(header);

  // Panel bölümü
  const panel = createElem('div', { className: 'panel' });

  // Sidebar
  const sidebar = createElem('div', { className: 'sidebar' });
  sidebar.appendChild(createElem('p', { text: 'Kollayıcı' }));

  const ul = createElem('ul');
  ['Geçmiş Veriler', 'Aylık Enerji Kullanımı', 'Tahminler', 'Öneriler'].forEach(item => {
    const li = createElem('li', { text: item });
    ul.appendChild(li);
  });
  sidebar.appendChild(ul);
  panel.appendChild(sidebar);

  // Content
  const content = createElem('div', { className: 'content', html: `
    <h3>Geçmiş Veriler</h3>
    <p>[Grafik Alanı]</p>
    <h3>Yenilenebilir Enerji</h3>
    <p>[Metin ve grafik]</p>
    <p>
      <a href="#">İletişim</a> | <a href="#">Sosyal Medya</a> | 
      <a href="#">KVKK</a> | <a href="#">Yasal Bilgiler</a>
    </p>
  `});
  panel.appendChild(content);

  body.appendChild(panel);
}