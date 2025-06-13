import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css"; 
import Navbar from "../Navbar";
import Footer from "../../Footer/Footer";

const Blog = () => {
  return (
    <div>
      <Navbar/>
    <div className="blog-section">
      <div className="blog-row">
        <div className="blog-card">
          <img src="/BlogImg/gardening.webp" alt="Gardening Basics" />
          <div className="text-overlay">
            <h3>Gardening Basics</h3>
            <p>Dive in and find everything you need to know about the basics of gardening & plant care and create the perfect home garden of your dreams!</p>
            <Link to="/gb">
              <button className="more-btn">More</button>
            </Link>
          </div>
          <div className="name-text">Gardening Basics</div> 
        </div>

        <div className="blog-card">
          <img src="/BlogImg/GardenM.webp" alt="Garden Maintenance" />
          <div className="text-overlay">
            <h3>Garden Maintenance</h3>
            <p>Find out how to tackle every garden maintenance problem, from pest infestations to overgrown weeds that bother your plants. A happy garden is a healthy garden!</p>
            <Link to="/gm">
              <button className="more-btn">More</button>
            </Link>
          </div>
          <div className="name-text">Garden Maintenance</div> 
        </div>

        <div className="blog-card">
          <img src="/BlogImg/KitchenG.webp" alt="Kitchen Gardening" />
          <div className="text-overlay">
            <h3>Kitchen Gardening</h3>
            <p>Grow the freshest produce of lush herbs and microgreen superfoods in the comfort of your own home! Here's everything there is to know about kitchen gardening basics.</p>
            <Link to="/kg">
              <button className="more-btn">More</button>
            </Link>
          </div>
          <div className="name-text">Kitchen Gardening</div> 
        </div>
      </div>

      <div className="blog-row">
        <div className="blog-card">
          <img src="/BlogImg/OrnamentalG.webp" alt="Ornamental Gardening" />
          <div className="text-overlay">
            <h3>Ornamental Gardening</h3>
            <p>Make the most exciting part of home gardening even better with stunning plant decor ideas and mesmerizing blooms. Discover the beauty of ornamental gardening!</p>
            <Link to="/og">
              <button className="more-btn">More</button>
            </Link>
          </div>
          <div className="name-text">Ornamental Gardening</div> 
        </div>

        <div className="blog-card">
          <img src="/BlogImg/GreenL.webp" alt="Green Lifestyle" />
          <div className="text-overlay">
            <h3>Green Lifestyle</h3>
            <p>Get festive with dreamy seasonal plants and give yourself or your loved ones the perfect green gifts of love. The world is your canvas, paint it green!</p>
            <Link to="/gl">
              <button className="more-btn">More</button>
            </Link>
          </div>
          <div className="name-text">Green Lifestyle</div> 
        </div>
      </div>
    </div>

<Footer/>
    </div>
  );
};

export default Blog;
