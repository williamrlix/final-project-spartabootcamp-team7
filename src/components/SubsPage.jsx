import React from 'react';


const SubsPage = ({ image, title, description, handleClick }) => {
  const imageHeight = window.innerHeight * (8/10);
  const imageWidth = window.innerWidth * (6/10);

  return (
    <>

    <div className='container'>
      <p>{description}</p>
      <button onClick={handleClick}>Pesan Tiket</button>
    </div>
    </>
  );
};

export default SubsPage;