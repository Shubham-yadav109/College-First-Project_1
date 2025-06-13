import React from "react";
import { FaTruck, FaMapMarkedAlt } from "react-icons/fa"; // Keep existing icons
import { GiFlowerPot } from "react-icons/gi"; // Import a flower icon
import "./Loc_G.css";

const Loc_G = () => {
  return (
    <div className="main-container">
      {/* Quick Delivery */}
      <div className="feature-box">
        <FaTruck className="feature-icon" />
        <h3 className="feature-title">Quick Delivery</h3>
      </div>

      {/* Customizable */}
      <div className="feature-box">
        <GiFlowerPot className="feature-icon" /> {/* Flower Icon */}
        <h3 className="feature-title">Customizable</h3>
      </div>

      {/* Pan India */}
      <div className="feature-box">
        <FaMapMarkedAlt className="feature-icon" />
        <h3 className="feature-title">Pan India</h3>
      </div>
    </div>
  );
};

export default Loc_G;
