import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ProductDetail.css';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import { CartContext } from '../../CardContext/CardContext'; 

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  const { addToCart } = useContext(CartContext); 

  if (!product) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Product Not Found</h2>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
    );
  }

 
  const handleBuyNow = () => {
    addToCart({
      ...product,
      id: product.id || new Date().getTime(),
      quantity: 1,
      image: product.imageUrl 
    });
    navigate('/cart'); 
  };

  return (
    <div className='final-page'>
      <Navbar />
      <div className="product-detail-page">
        <div className="product-detail-container">
          <img src={product.imageUrl} alt={product.name} className="product-detail-image" />
          <div className="product-detail-info">
            <h1>{product.name}</h1>
            <p className="original-price"><s>₹{product.originalPrice}</s></p>
            <p className="sale-price">₹{product.salePrice}</p>
            <p className="discount">{product.discount}% OFF</p>
            <p className="description">This is a beautiful and healthy plant, perfect for your home or office.</p>
            <button onClick={() => navigate('/')}>Back to Bestsellers</button>
            <button className="buy-now" onClick={handleBuyNow}>Buy Now</button> 
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
