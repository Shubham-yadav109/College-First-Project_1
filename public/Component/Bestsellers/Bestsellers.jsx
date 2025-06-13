import React from 'react';
import './Bestsellers.css';

import BestSellers_1 from '/BestSellers/BestSellers_1.webp';
import BestSellers_2 from '/BestSellers/BestSellers_2.webp';
import BestSellers_3 from '/BestSellers/BestSellers_3.webp';
import BestSellers_4 from '/BestSellers/BestSellers_4.webp';
import BestSellers_5 from '/BestSellers/BestSellers_5.webp';
import BestSellers_6 from '/BestSellers/BestSellers_6.webp';
import BestSellers_7 from '/BestSellers/BestSellers_7.webp';
import BestSellers_8 from '/BestSellers/BestSellers_8.webp';
import BestSellers_9 from '/BestSellers/BestSellers_9.webp';
import BestSellers_10 from'/BestSellers/BestSellers_10.webp';
// Updated image URLs
const Brazilian_Wood_Plant            = BestSellers_1; // Replace with actual image if needed
const Peace_Lily_Plant                = BestSellers_2;
const Monstera_Deliciosa_Plant        = BestSellers_3;
const Jade_Plant_Mini                 = BestSellers_4;
const Bamboo_Palm_Plant               = BestSellers_5;
const Aglaonema_Pink_Beauty_Plant     = BestSellers_6;

const Aglaonema_Pink_Beauty_Plant_Gift_Hamper = BestSellers_7;
const Aglaonema_Butterfly_Plant               = BestSellers_8;
const Snake_Plant_Golden_Hahnii               = BestSellers_9;
const Ficus_Bonsai_Plant                      = BestSellers_10;

const Bestsellers = () => {
  const products = [
    {
      name: 'Brazilian_Wood_Plant',
      regularPrice: '₹2,999',
      salePrice: '₹1,999',
      discount: '34% OFF',
      imageUrl: Brazilian_Wood_Plant,
    },
    {
      name: 'Peace_Lily_Plant',
      regularPrice: '₹2,799',
      salePrice: '₹1,899',
      discount: '33% OFF',
      imageUrl: Peace_Lily_Plant,
    },
    {
      name: 'Monstera_Deliciosa_Plant',
      regularPrice: '₹1,999',
      salePrice: '₹499',
      discount: '76% OFF',
      imageUrl: Monstera_Deliciosa_Plant,
    },
    {
      name: 'Jade_Plant_Mini',
      regularPrice: '₹399',
      salePrice: '₹299',
      discount: '26% OFF',
      imageUrl: Jade_Plant_Mini,
    },
    {
      name: 'Bamboo_Palm_Plant',
      regularPrice: '₹1,299',
      salePrice: '₹999',
      discount: '23% OFF',
      imageUrl: Bamboo_Palm_Plant,
    },
    {
      name: 'Aglaonema_Pink_Beauty_Plant',
      regularPrice: '₹1,299',
      salePrice: '₹999',
      discount: '23% OFF',
      imageUrl: Aglaonema_Pink_Beauty_Plant,
    },
    {
      name: 'Aglaonema Pink Beauty Plant Gift Hamper',
      regularPrice: '₹1,999',
      salePrice: '₹499',
      discount: '76% OFF',
      imageUrl: Aglaonema_Pink_Beauty_Plant_Gift_Hamper,
    },
    {
      name: 'Aglaonema Butterfly Plant',
      regularPrice: '₹399',
      salePrice: '₹299',
      discount: '26% OFF',
      imageUrl: Aglaonema_Butterfly_Plant,
    },
    {
      name: 'Snake Plant - Golden Hahnii',
      regularPrice: '₹1,299',
      salePrice: '₹999',
      discount: '23% OFF',
      imageUrl: Snake_Plant_Golden_Hahnii,
    },
    {
      name: 'Ficus Bonsai Plant',
      regularPrice: '₹1,299',
      salePrice: '₹999',
      discount: '23% OFF',
      imageUrl: Ficus_Bonsai_Plant,
    },
  ];

  return (
    <div className="bestsellers">
      <h1 className="bestsellers-title">Bestsellers</h1>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="regular-price">{product.regularPrice}</p>
              <p className="sale-price">{product.salePrice}</p>
              <span className="discount">{product.discount}</span>
              <button className="add-to-cart">Add to cart</button>
              <button className="view-product">View product</button>
            </div>
          </div>
        ))}
      </div>
      <button className="view-all">View all</button>
    </div>
  );
};

export default Bestsellers;
