import React from 'react';

const Card = ({ image, title, description }) => {
const cardHeight = window.innerHeight / 2;
const cardWidth = window.innerWidth * (2.7/10);

return (
<div style={{
height: cardHeight,
width: cardWidth,
backgroundImage: `url(${image})`,
backgroundSize: 'cover',
backgroundPosition: 'center',
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
margin: '10px 0',
borderRadius: '10px',
transition: 'opacity 0.2s ease-in-out',
opacity: 1,
':hover': {
opacity: 0.7
}
}}>
<h3 style={{ color: 'white', textAlign: 'center' }}>{title}</h3>
</div>
);
};

export default Card;