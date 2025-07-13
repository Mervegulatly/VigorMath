import React from 'react';
import './Topbar.css';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className='wrapper'>
        <div className='topbar-left'>
            <span>
                <img src='public/VigorMathIcon.jpg'></img>
            </span>
        </div>
        <div className='topbar-right'>
            <a href='#'>MİSYON</a>
            <a href='#'>VİZYON</a>
            <a href='#'>BAŞVURU</a>
            <Link to="/login">GİRİŞ</Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
