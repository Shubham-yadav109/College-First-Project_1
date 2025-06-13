import React from "react";
import "./WhyTreeSewa.css";

const WhyTreeSewa = () => {
  return (
    <section className="why-tree-sewa">
      <div className="container">
        <div className="content-wrapper">
          <div className="video-section">
            <h2>Why Choose TreeSewa?</h2>
            <p>
              Experience the joy of growing plants while connecting with nature. 
              TreeSewa brings the best plants to your doorstep, helping you make your surroundings greener and more vibrant.
            </p>
<div className="video-wrapper">
  <iframe
    src="https://www.youtube.com/embed/wY8DMF8nlw0?start=7"
    title="Why TreeSewa"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

          </div>

          <div className="features-section">
            <div className="feature">
              <div className="icon">🌱</div>
              <h3>Secure and Recyclable Packaging</h3>
              <p>All plants are packed securely in eco-friendly, recyclable materials.</p>
            </div>
            <div className="feature">
              <div className="icon">🔄</div>
              <h3>Free Replacements if Damaged</h3>
              <p>If your plant arrives damaged, we’ll replace it free of charge.</p>
            </div>
            <div className="feature">
              <div className="icon">💧</div>
              <h3>Self-Watering Pots</h3>
              <p>Every plant comes with a self-watering pot to make maintenance hassle-free.</p>
            </div>
            <div className="feature">
              <div className="icon">🌳</div>
              <h3>25-Acre Farm-to-Doorstep</h3>
              <p>
                Your plants are handpicked from our lush 25-acre farm and delivered fresh to your home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTreeSewa;
