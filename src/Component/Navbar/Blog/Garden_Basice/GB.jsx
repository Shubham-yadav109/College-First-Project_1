import React from "react";
import "./GB.css";
import Navbar from "../../Navbar";
import Footer from "../../../Footer/Footer";

const GB = () => {
  return (
    <div className="main-class-gb">
      <Navbar/>
    <div className="gb-container">

      <h1 className="gb-title">🌸 What's So Special About Lupine Flowers? 🌸</h1>
      <img src="/BlogImg/GB/GB_1.webp" alt="Lupine Flowers" className="gb-big-image" />

      <p className="gb-description">
        The question we really like to ask is <strong>"What isn't special about them?"</strong>
      </p>
      <p className="gb-sub-text">🌿 Here's everything that makes Lupines the best garden flowers! 🌿</p>

      
      <ul className="gb-features">
        <li>✔ <strong>Dreamy, tall blooms</strong> - delightful ornamental plants</li>
        <li>✔ <strong>Perfect border plants</strong> that fit well into all kinds of gardens</li>
        <li>✔ <strong>Potential anti-aging benefits</strong> - popular in Ayurvedic medicine</li>
        <li>✔ <strong>Improve soil fertility</strong> in the long run</li>
        <li>✔ <strong>Help create a bustling pollinator garden</strong></li>
      </ul>

   
      <table className="gb-info-table">
        <tr>
          <th>🌱 Other Names</th>
          <td>Lupine, Lupin, Bluebonnet flowers</td>
        </tr>
        <tr>
          <th>⏳ Lifespan</th>
          <td>2-5 years, with the right care</td>
        </tr>
      </table>
      
     
      <h2 className="gb-section-title">🌱 How to Germinate Lupin Seeds 🌱</h2>
      <img src="/BlogImg/GB/GB_2.webp" alt="Germination" className="gb-big-image" />
      <p className="gb-description">
        Want to grow Lupin flowers? Follow these simple steps to germinate seeds at home!
      </p>
      
     
      <div className="gb-step">
        <h3 className="gb-step-title">🚀 Step 1: Pick a Location</h3>
        <img src="/BlogImg/GB/GB_3.webp" alt="Seed Location" className="gb-big-image" />
        <p className="gb-description">Choose between Indoor or Outdoor germination:</p>
        <ul className="gb-details">
          <li><strong>🌿 Indoors:</strong> Use a seedling tray and coco peat.</li>
          <li><strong>🌿 Outdoors:</strong> Use well-draining potting mix, sow 1/4 - 1/2 inch deep.</li>
        </ul>
      </div>

      <div className="gb-step">
        <h3 className="gb-step-title">☀ Step 2: Ensure a Sunny Spot</h3>
        <img src="/BlogImg/GB/GB_4.webp" alt="Sunny Spot" className="gb-big-image" />
        <p className="gb-description">Lupins need <strong>6-8 hours</strong> of sunlight daily. Avoid harsh afternoon sun.</p>
      </div>

      <div className="gb-step">
        <h3 className="gb-step-title">💦 Step 3: Watering</h3>
        <img src="/BlogImg/GB/GB_5.webp" alt="Watering" className="gb-big-image" />
        <p className="gb-description">
          Keep the soil moist but not soggy. Overwatering can suffocate the seeds.
        </p>
      </div>

      <div className="gb-step">
        <h3 className="gb-step-title">🌿 Step 4: Transplanting</h3>
        <img src="/BlogImg/GB/GB_6.webp" alt="Transplanting" className="gb-big-image" />
        <p className="gb-description">Once seedlings are strong, move them to bigger pots or garden beds.</p>
      </div>
      
      
      <table className="gb-info-table">
        <tr>
          <th>🌞 Sunlight</th>
          <td>6-8 hours a day</td>
        </tr>
        <tr>
          <th>🌱 Growth</th>
          <td>Fast-growing legume</td>
        </tr>
        <tr>
          <th>⚠ Toxicity</th>
          <td>Toxic to humans and animals upon ingestion</td>
        </tr>
      </table>
      
      <p className="gb-final-text">🌿 Now you know how to grow beautiful Lupine flowers! 🌿</p>
    </div>

<Footer/>
    </div>

  );
};

export default GB;
