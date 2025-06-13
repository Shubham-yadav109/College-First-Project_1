import React from "react";
import "./ShoptheLook.css";


import ShopLook_1 from "/ShopLook/ShopLook_1.webp";
import ShopLook_2 from "/ShopLook/ShopLook_2.webp";
import ShopLook_3 from "/ShopLook/ShopLook_3.webp";
import ShopLook_4 from "/ShopLook/ShopLook_4.webp";

const ShoptheLook = () => {
  return (
    <div className="shop-the-look">
      <div className="section-header">
        <h1>Shop The Look</h1>
        <p>Discover the perfect combination for your style.</p>
      </div>
      <div className="product-grid">
        <div className="product-card">
          <img
            src={ShopLook_1}
            alt="Product 1"
            className="product-image"
            onError={(e) => (e.target.src = "/fallback-image.jpg")}
          />
          <div className="product-info">
            <h3>Product Name 1</h3>
            <p>$25.00</p>
          </div>
        </div>
        <div className="product-card">
          <img
            src={ShopLook_2}
            alt="Product 2"
            className="product-image"
            onError={(e) => (e.target.src = "/fallback-image.jpg")}
          />
          <div className="product-info">
            <h3>Product Name 2</h3>
            <p>$30.00</p>
          </div>
        </div>
        <div className="product-card">
          <img
            src={ShopLook_3}
            alt="Product 3"
            className="product-image"
            onError={(e) => (e.target.src = "/fallback-image.jpg")}
          />
          <div className="product-info">
            <h3>Product Name 3</h3>
            <p>$35.00</p>
          </div>
        </div>
        <div className="product-card">
          <img
            src={ShopLook_4}
            alt="Product 4"
            className="product-image"
            onError={(e) => (e.target.src = "/fallback-image.jpg")}
          />
          <div className="product-info">
            <h3>Product Name 4</h3>
            <p>$40.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoptheLook;
