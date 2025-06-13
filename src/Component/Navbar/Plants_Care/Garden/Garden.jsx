import React, { useContext } from "react";
import { Link } from "react-router-dom"; 
import { CartContext } from "../../../CardContext/CardContext";
import "./Garden.css";
import Navbar from "../../Navbar";
import Footer from "../../../Footer/Footer";

const products = [
  { name: "Pruning Shears", originalPrice: 600, discount: 15,           image: "/Plants_Care/Garden/G_1.jpg" },
  { name: "Hand Trowel", originalPrice: 350, discount: 10,              image: "/Plants_Care/Garden/G_2.jpg" },
  { name: "Garden Fork", originalPrice: 450, discount: 12,              image: "/Plants_Care/Garden/G_3.jpg" },
  { name: "Weeding Tool", originalPrice: 400, discount: 8,              image: "/Plants_Care/Garden/G_4.jpg" },
  { name: "Watering Can (5L)", originalPrice: 550, discount: 10,        image: "/Plants_Care/Garden/G_5.jpg" },
  { name: "Garden Hoe", originalPrice: 700, discount: 14,               image: "/Plants_Care/Garden/G_6.jpg" },
  { name: "Rake", originalPrice: 750, discount: 16,                     image: "/Plants_Care/Garden/G_7.jpg" },
  { name: "Spray Pump (1L)", originalPrice: 480, discount: 9,           image: "/Plants_Care/Garden/G_8.jpg" },
  { name: "Transplanter", originalPrice: 500, discount: 10,             image: "/Plants_Care/Garden/G_9.jpg" },
  { name: "Hand Cultivator", originalPrice: 580, discount: 11,          image: "/Plants_Care/Garden/G_10.jpg" },
  { name: "Lawn Scissors", originalPrice: 800, discount: 18,            image: "/Plants_Care/Garden/G_11.jpg" },
  { name: "Gardening Gloves (1 Pair)", originalPrice: 300, discount: 10,image: "/Plants_Care/Garden/G_12.jpg" }
];


const Garden = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <Navbar />
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

      
      <Footer />
    </div>
  );
};

export default Garden;
