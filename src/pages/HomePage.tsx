import React from 'react';
import '../App.css';

type HomePageProps = {
  username?: string;
};

const HomePage = ({ username }: HomePageProps) => {
  return (
    <div className='App'>
      <div className="homepage"> 
        <div className="content">
          <h1>VigorMath ile Enerjinizi Yönetin Geleceği Kazanın!</h1>
          <p>Yenilenebilir enerji destekli yapay zeka ile enerji tüketiminizi kontrol altına alın. Akıllı izleme, analiz ve tasarruf tek platformda.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
