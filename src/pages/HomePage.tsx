import React from 'react';

type HomePageProps = {
  username?: string;
};

const HomePage = ({ username }: HomePageProps) => {
  return (
    <div className="App" id='HomePage'>
      <h1>Hoşgeldin, {username}!</h1>
      <p>Bu senin anasayfan.</p>
      {/* Buraya istediğin içerikleri koyabilirsin */}
    </div>
  );
};

export default HomePage;
