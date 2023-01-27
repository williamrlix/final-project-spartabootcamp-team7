import React from 'react';
import '../App.css';

const Header = ({ image, title}) => {

  return (
    <div style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '675px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <h2 style={{ color: 'white', fontSize: '3em' }}>{title}</h2>
    </div>
  );
};

export default Header;