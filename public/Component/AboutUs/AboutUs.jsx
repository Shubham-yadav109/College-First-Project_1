import React from "react";
import "./AboutUs.css";

import AboutTreeSewa from "/AboutTreeSewa/TreeSewa.webp";


function AboutUs() {
  return (
    <section className="about-us">
      <div className="about-container">
        {/* Left Section: Image */}
        <div className="about-image">
        <img
             src={AboutTreeSewa} // Picsum image
             alt="TreeSewa About"
        />

        </div>

        {/* Right Section: Content */}
        <div className="about-content">
          <h2>About TreeSewa</h2>
          <p>
            Welcome to <strong>TreeSewa</strong>, your one-stop solution for all your plant and gardening needs. 
            At TreeSewa, we aim to make the world greener by connecting nature lovers with the best-quality plants and gardening services. 
            From lush indoor plants to ornamental flowering plants, and even personalized plant care, we have everything you need to nurture nature.
          </p>
          <p>
            We also offer top-notch organic fertilizers, premium pots, and garden tools to help you care for your plants. 
            With exclusive discounts on bulk purchases and doorstep delivery, we make gardening easier than ever. 
            Join us in creating a healthier and greener tomorrow with TreeSewa!
          </p>
          <div className="about-icons">
            <div>
              <i className="fas fa-seedling"></i>
              <p>Organic Fertilizers</p>
            </div>
            <div>
              <i className="fas fa-leaf"></i>
              <p>Healthy Plants</p>
            </div>
            <div>
              <i className="fas fa-truck"></i>
              <p>Doorstep Delivery</p>
            </div>
            <div>
              <i className="fas fa-recycle"></i>
              <p>Eco-Friendly Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
