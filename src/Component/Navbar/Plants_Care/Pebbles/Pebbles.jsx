import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../CardContext/CardContext";
import "./Pebbles.css";
import Navbar from "../../Navbar";
import Footer from "../../../Footer/Footer";

const products = [
  { name: "White Marble Pebbles", originalPrice: 500, discount: 10,       image: "/Plants_Care/Pebbles/P_1.jpg"},
  { name: "Black Polished Pebbles", originalPrice: 600, discount: 12,     image: "/Plants_Care/Pebbles/P_2.jpg"},
  { name: "River Pebbles", originalPrice: 400, discount: 8,               image: "/Plants_Care/Pebbles/P_3.jpg"},
  { name: "Red Lava Pebbles", originalPrice: 700, discount: 15,           image: "/Plants_Care/Pebbles/P_4.jpg"},
  { name: "Green Garden Pebbles", originalPrice: 550, discount: 10,       image: "/Plants_Care/Pebbles/P_5.jpg"},
  { name: "Yellow Decorative Pebbles", originalPrice: 650, discount: 12,  image: "/Plants_Care/Pebbles/P_6.jpg"},
  { name: "Brown Natural Pebbles", originalPrice: 480, discount: 9,       image: "/Plants_Care/Pebbles/P_7.jpg"},
  { name: "Crystal Clear Pebbles", originalPrice: 750, discount: 18,      image: "/Plants_Care/Pebbles/P_8.jpg"},
  { name: "Aquarium White Pebbles", originalPrice: 520, discount: 10,     image: "/Plants_Care/Pebbles/P_9.jpg"},
  { name: "Grey River Pebbles", originalPrice: 580, discount: 11,         image: "/Plants_Care/Pebbles/P_10.jpg"},
  { name: "Golden Glossy Pebbles", originalPrice: 800, discount: 20,      image: "/Plants_Care/Pebbles/P_11.jpg"},
  { name: "Mixed Color Pebbles", originalPrice: 450, discount: 10,        image: "/Plants_Care/Pebbles/P_12.jpg"}
];


const Pebbles = () => {
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

export default Pebbles;
