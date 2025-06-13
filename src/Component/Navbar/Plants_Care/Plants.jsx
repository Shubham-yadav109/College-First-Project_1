import React from "react";
import { Link } from "react-router-dom";
import "./Plants.css"; 
import Navbar from "../Navbar";
import Footer from "../../Footer/Footer";

const Plants = () => {
  return (
    <div>

      <Navbar/>
    <div className="blog-section">
      <div className="blog-row">
        <div className="blog-card">
          <img src="/Plants_Care/S_1.jpg" alt="Gardening Basics" />
          <div className="text-overlay">
            <h3>Soil & Manure</h3>
            <p>Soil and manure are used in plant care because soil provides support and nutrients, while manure improves soil fertility, helping plants grow healthier and stronger.!</p>
            <Link to="/soil">
              <button className="more-btn">More</button>
            </Link>
          </div>
          <div className="name-text">Gardening Basics</div> 
        </div>

        <div className="blog-card">
          <img src="/Plants_Care/Garden/HOME.jpg" alt="Garden Maintenance" />
          <div className="text-overlay">
            <h3>Garden Tools</h3>
            <p>garden tools help make planting, watering, trimming, and maintaining plants easier. They save time, protect plants from damage, and ensure they grow healthy.</p>
            <Link to="/garden">
              <button className="more-btn">More</button>
            </Link>
          </div>
          <div className="name-text">Garden Maintenance</div> 
        </div>

        <div className="blog-card">
          <img src="/Plants_Care/W_2.webp" alt="Kitchen Gardening" />
          <div className="text-overlay">
            <h3>Watering Tools</h3>
            <p>A watering tool is used in plant care to provide the right amount of water to plants, ensuring they stay healthy, grow well, and do not dry out or get overwatered.</p>
            <Link to="/watering">
              <button className="more-btn">More</button>
            </Link>
          </div>
          <div className="name-text">Watering Tools</div> 
        </div>
      </div>

      <div className="blog-row">
        <div className="blog-card">
          <img src="/Plants_Care/P_3.jpg" alt="Ornamental Gardening" />
          <div className="text-overlay">
            <h3>Pebbles </h3>
            <p>Pebbles are used in plant care to improve drainage, retain moisture, prevent soil erosion, and enhance the beauty of the plant setup.!</p>
            <Link to="/pebbles">
              <button className="more-btn">More</button>
            </Link>
          </div>
          <div className="name-text">Ornamental Gardening</div> 
        </div>

        <div className="blog-card">
          <img src="/Plants_Care/DIY_2.jpg" alt="Green Lifestyle" />
          <div className="text-overlay">
            <h3> DIY Pest Control</h3>
            <p>DIY pest control helps protect plants from harmful insects using natural or homemade methods, keeping them healthy without chemicals.!</p>
            <Link to="/diy">
              <button className="more-btn">More</button>
            </Link>
          </div>
          <div className="name-text">Green Lifestyle</div> 
        </div>
      </div>

      {/* <div className="go-home-btn">
        <Link to="/">
          <button>🏠Go Home</button>
        </Link>
      </div> */}
    </div>

    <Footer/>
    </div>
  );
};

export default Plants;
