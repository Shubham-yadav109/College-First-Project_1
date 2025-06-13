
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { CartContext } from "../CardContext/CardContext"; 
import './Bestsellers.css';

import BestSellers_1 from '/BestSellers/BestSellers_1.webp';
import BestSellers_2 from '/BestSellers/BestSellers_2.webp';
import BestSellers_3 from '/BestSellers/BestSellers_3.webp';
import BestSellers_4 from '/BestSellers/BestSellers_4.webp';
import BestSellers_5 from '/BestSellers/BestSellers_5.webp';
import BestSellers_6 from '/BestSellers/BestSellers_6.webp';

const localProducts = [
  { name: 'Brazilian Wood Plant', originalPrice: 2999, salePrice: 1999, discount: 34, imageUrl: BestSellers_1 },
  { name: 'Peace Lily Plant', originalPrice: 2799, salePrice: 1899, discount: 33, imageUrl: BestSellers_2 },
  { name: 'Monstera Deliciosa Plant', originalPrice: 1999, salePrice: 499, discount: 76, imageUrl: BestSellers_3 },
  { name: 'Jade Plant Mini', originalPrice: 399, salePrice: 299, discount: 26, imageUrl: BestSellers_4 },
  { name: 'Bamboo Palm Plant', originalPrice: 1299, salePrice: 999, discount: 23, imageUrl: BestSellers_5 },
  { name: 'Aglaonema Pink Beauty Plant', originalPrice: 1299, salePrice: 999, discount: 23, imageUrl: BestSellers_6 }
];

const Bestsellers = () => {
  const [products, setProducts] = useState(localProducts);
  const { addToCart } = useContext(CartContext); 
  const navigate = useNavigate(); 

  useEffect(() => {
    axios.get('http://localhost:9393/plants/all')
      .then(response => {
        const backendProducts = response.data.map(plant => ({
          name: plant.name,
          originalPrice: plant.regularPrice,
          salePrice: plant.salePrice,
          discount: plant.discount,
          imageUrl: plant.image_url ? `http://localhost:9393/uploads/${plant.image_url}` : BestSellers_1, 
        }));
        setProducts([...localProducts, ...backendProducts]);
      })
      .catch(error => {
        console.error('Error fetching plants:', error);
      });
  }, []);

  return (
    <div className="bestsellers">
      <h1 className="bestsellers-title">Bestsellers</h1>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="regular-price"><s>₹{product.originalPrice}</s></p>
              <p className="sale-price">₹{product.salePrice}</p>
              <span className="discount">{product.discount}% OFF</span>
              <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
              <button className="view-product" onClick={() => navigate('/product', { state: { product } })}>View Product</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bestsellers;
