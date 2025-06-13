import React from "react";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="slider-container">
      <div className="image-container">
        <img
          src="https://picsum.photos/1200/600?grayscale"
          alt="Slider"
          className="slider-image"
        />
        <button className="gift-button">Gift Now</button>
      </div>
    </div>
  );
};

export default Slider;
