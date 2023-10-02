// ImgCard.jsx
import React, { useState, useEffect } from 'react';
import '../Styles/ImgCard.css'

const ImgCards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  
    fetch('./data.json')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
    <div className='imgc'>
      <h2>Travel🛩️</h2>
      <ul className='ul_list'>
        {products.map((product) => (
          <li className='listitem' key={product.id}>
            <h3 className='titles'>{product.title}</h3>
            <img className='img1' src={product.imageSrc} alt={product.title} />
            <p className='prices'>{product.price}</p>
            <button className='btn0'>Book Now 🛩️</button>
       
          </li>
        ))}
      </ul>

    </div>
   
    
    </>


  );

};

export default ImgCards;
