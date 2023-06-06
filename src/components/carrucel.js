import React, { useState } from 'react';
import '../styles/carrucel.css';
import maletaImage from '../images/maleta.png';
import sombreroImage from '../images/sombrero.png';
import reciboImage from '../images/recibo.png';

function Carrucel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [maletaImage, sombreroImage, reciboImage];
  const texts = [
    'Podras solicitar informacion sobre propuestas de trabajo',
    'Podras relizar tramites educativos',
    'Realizaras tramites sobre tu informacion financiera ',
  ];

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="AppCarrucel">
      <button className="carousel-button" onClick={handlePrevClick}>Atras</button>
      <div className="image-carousel">
        <div className="image-container">
          <img src={images[currentImageIndex]} alt={`Imagen ${currentImageIndex + 1}`} className="image" />
        </div>
        <div className="text-container">
          <p className="text">{texts[currentImageIndex]}</p>
        </div>
      </div>
      <button className="carousel-button" onClick={handleNextClick}>Siguiente</button>
    </div>
  );
}

export default Carrucel;
