import React from 'react';

const SliderContainer = ({ image, title }) => {
  return (
    <div style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: 'calc(100vh / 2)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
      {/* <div style={{ backgroundImage:`url(${image})`,backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: 'calc(100vh / 2)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}> */}
        <h3 style={{ color: 'white', fontSize: '3em', textAlign: 'center' }}>{title}</h3>
      </div>
    // </div>
  );
}
export default SliderContainer;