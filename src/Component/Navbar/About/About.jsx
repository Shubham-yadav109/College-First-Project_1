import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import { FaSeedling, FaHistory, FaUsers, FaLeaf, FaShoppingCart, FaRecycle, FaMobileAlt, FaAssistiveListeningSystems } from 'react-icons/fa';
import Footer from '../../Footer/Footer';
import Navbar from '../Navbar';

const About = () => {
  const navigate = useNavigate();

  return (
    <div>

<Navbar/>

    <div className="about-container">
      <header className="about-header">
        <h1>About TreeSewa</h1>
        <p>Your trusted online plant-selling platform</p>
        <button className="go-home-button" onClick={() => navigate('/')}>🏠 Go Home</button>
      </header>

      <section className="about-section">
        <FaSeedling className="about-icon" />
        <div>
          <h2>Rooted in Tradition</h2>
          <p>
            TreeSewa was created to bridge the gap between plant lovers and accessibility. Many people cannot visit physical nurseries, so we provide an easy online platform for buying plants.
          </p>
        </div>
      </section>

      <section className="about-section">
        <FaHistory className="about-icon" />
        <div>
          <h2>Our Journey</h2>
          <p>
            We began as a small idea and have now grown into a full-fledged online platform that sells a variety of plants with doorstep delivery and support services.
          </p>
        </div>
      </section>

      <section className="about-section">
        <FaShoppingCart className="about-icon" />
        <div>
          <h2>Seamless Plant Shopping</h2>
          <p>
            TreeSewa provides a hassle-free online plant booking system with multiple payment options, including online payments and cash on delivery.
          </p>
        </div>
      </section>

      <section className="about-section">
        <FaRecycle className="about-icon" />
        <div>
          <h2>Return & Cashback Policy</h2>
          <p>
            If any plant is damaged during delivery or does not grow properly, we offer an easy return policy along with cashback rewards.
          </p>
        </div>
      </section>

      <section className="about-section">
        <FaMobileAlt className="about-icon" />
        <div>
          <h2>Smart Scanning System</h2>
          <p>
            Our website provides a plant scanning system that helps users identify plant health issues and receive expert advice on recovery and care.
          </p>
        </div>
      </section>

      <section className="about-section">
        <FaLeaf className="about-icon" />
        <div>
          <h2>Pre-Order & Bulk Purchase</h2>
          <p>
            If a plant is unavailable, customers can send us an SMS request, and we will notify them when it is back in stock. We also accept bulk orders with estimated delivery times.
          </p>
        </div>
      </section>

      <section className="about-section">
        <FaAssistiveListeningSystems className="about-icon" />
        <div>
          <h2>Personalized Assistance</h2>
          <p>
            Customers can book an assistant visit to get on-site plant health checks. Our experts will provide solutions, and users can schedule appointments online.
          </p>
        </div>
      </section>
    </div>

    <Footer/>
    </div>
  );
};

export default About;
