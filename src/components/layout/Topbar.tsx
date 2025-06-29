import React from 'react';
import './Topbar.css';

const Topbar = () => {
  return (
    <div className="topbar">
        <div className='topbar-left'>
            <span>
                <img src='public/VigorMathIcon.jpg'></img>
            </span>
        </div>
        <div className='topbar-right'>
            <a href='#'>MİSYON</a>
            <a href='#'>VİZYON</a>
            <a href='#'>BAŞVURU</a>
            <a href='/login'>GİRİŞ</a>
        </div>
    </div>
  );
};

export default Topbar;
