import React ,{useContext} from "react";
import { Link } from "react-router-dom"; 
import "./Watering.css";
import Navbar from "../../Navbar";
import Footer from "../../../Footer/Footer";

import { CartContext } from "../../../CardContext/CardContext";


const products = [
  { name: "Plastic Watering Can (1.5L)", originalPrice: 250, salePrice: 225, discount: 10, image:    "/Plants_Care/Watering/PWC.webp" },
  { name: "Metal Watering Can (2L)", originalPrice: 600, salePrice: 510, discount: 15, image:        "/Plants_Care/Watering/MWC.jpg" },
  { name: "Automatic Drip Irrigation Kit", originalPrice: 1200, salePrice: 960, discount: 20, image: "/Plants_Care/Watering/ADIK.jpg" },
  { name: "Spray Bottle (500ml)", originalPrice: 150, salePrice: 143, discount: 5, image:            "/Plants_Care/Watering/SB.jpg"},
  { name: "Long Spout Watering Can (1L)", originalPrice: 350, salePrice: 315, discount: 10, image:   "/Plants_Care/Watering/LSWC.webp" },
  { name: "Self-Watering Spikes (6 pcs)", originalPrice: 500, salePrice: 425, discount: 15, image:   "/Plants_Care/Watering/SWS.jpg" },
  { name: "Watering Bulbs (2 pcs)", originalPrice: 400, salePrice: 352, discount: 12, image:         "/Plants_Care/Watering/WB.webp"},
  { name: "Hose Pipe with Nozzle (10m)", originalPrice: 1500, salePrice: 1230, discount: 18, image:  "/Plants_Care/Watering/HPWN.webp" },
  { name: "Adjustable Spray Nozzle", originalPrice: 700, salePrice: 595, discount: 15, image:        "/Plants_Care/Watering/ASN.jpg" },
  { name: "Hand Pressure Sprayer (2L)", originalPrice: 800, salePrice: 720, discount: 10, image:     "/Plants_Care/Watering/HPS.webp" },
  { name: "Plant Mister (Glass, 300ml)", originalPrice: 300, salePrice: 276, discount: 8, image:     "/Plants_Care/Watering/PM.jpg"},
  { name: "Watering Wand (Extendable)", originalPrice: 1000, salePrice: 880, discount: 12, image:    "/Plants_Care/Watering/WW.webp"}
];

  

const Watering = () => {
  const { addToCart } = useContext(CartContext);
  return (
    <div>
      <Navbar/>
      <div className="product-grid">
        {products.map((product, index) => {
          const salePrice = Math.round(product.originalPrice - (product.originalPrice * product.discount / 100));

          return (
            <div className="product-card" key={index}>
              <span className="discount">{product.discount}% OFF</span>
              <img src={product.image} alt={product.name} />
              <p className="product-name">{product.name}</p>
              <p className="price">
                <span className="strike">₹{product.originalPrice}</span> ₹{salePrice}
              </p>
             <button className="add-to-cart" onClick={() => addToCart({ ...product, salePrice })}>
                         Add to Cart
                       </button>
            </div>
          );
        })}
      </div>

     
      <Footer/>
    </div>
    
  );
};

export default Watering;
