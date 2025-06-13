import React, { useState, useEffect } from 'react';
import './GetOffer.css';

const GetOffer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const content = [
    "Free Shipping above ₹499 | All India Delivery |",
    "Get ₹150 Off Above ₹1499 |",
    "Buy Our XL Plants",
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const autoSlide = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
      }, 5000);

      return () => clearInterval(autoSlide);
    }
  }, [isMobile]);

  return (
    <div className={`promo-slider ${isMobile ? 'mobile' : 'desktop'}`}>
      {!isMobile ? (
        <div className="slider-row">
          {content.map((text, index) => (
            <span key={index} className="slider-item">
              {text}
            </span>
          ))}
        </div>
      ) : (
        <>
          <button
            className="arrow left-arrow"
            onClick={() =>
              setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? content.length - 1 : prevIndex - 1
              )
            }
          >
            &lt;
          </button>
          <div className="slider-content">
            <p>{content[currentIndex]}</p>
          </div>
          <button
            className="arrow right-arrow"
            onClick={() =>
              setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length)
            }
          >
            &gt;
          </button>
        </>
      )}
    </div>
  );
};

export default GetOffer;
