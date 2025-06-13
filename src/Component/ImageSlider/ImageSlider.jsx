import React, { useState, useEffect } from "react";
import './ImageSlider.css'; 
import slider1 from "/Slider/Slider-4.png";
import slider2 from "/Slider/Slider-2.png";
import slider3 from "/Slider/Slider-3.png";
import slider4 from "/Slider/Slider-4.png";
import slider5 from "/Slider/Slider-5.png";

const ImageSlider = () => {
  const images = [
    {
      src: slider1, 
      alt: "Slide 1",
      title: "Welcome to TreeSewa",
      buttonText: "Shop Now"
    },
    {
      src: slider2, 
      alt: "Slide 2",
      title: "Find the Best Plants",
      buttonText: "Shop Now"
    },
    {
      src:slider3, 
      alt: "Slide 3",
      title: "Explore Our Collection",
      buttonText: "Shop Now"
    },
    {
      src: slider4, 
      alt: "Slide 4",
      title: "Explore Our Collection",
      buttonText: "Shop Now"
    },    {
      src: slider5, 
      alt: "Slide 5",
      title: "Explore Our Collection",
      buttonText: "Shop Now"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div className="slider-item" key={index}>
            <img src={image.src} alt={image.alt} />
            <div className="overlay">
              <h2>{image.title}</h2>
              <a href="/plants-care" className="shop-now">{image.buttonText}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
