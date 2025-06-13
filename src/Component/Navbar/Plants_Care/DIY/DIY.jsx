import React, { useContext } from "react";
import { Link } from "react-router-dom"; 
import { CartContext } from "../../../CardContext/CardContext";
import Navbar from "../../Navbar";
import Footer from "../../../Footer/Footer";
import "./DIY.css";

const products = [
    { name: "Neem Oil Spray	", originalPrice: 250, salePrice: 225,   discount: 10,       image: "/Plants_Care/DIY/NOS.jpg" },
    { name: "Garlic Spray", originalPrice: 250,salePrice: 199, discount: 17,             image: "/Plants_Care/DIY/GS.jpg" },
    { name: "Soap Water Spray", originalPrice: 385,salePrice: 300, discount: 14,         image: "/Plants_Care/DIY/SWS.jpg" },
    { name: "Baking Soda Spray", originalPrice: 450, salePrice: 400,discount: 15,        image: "/Plants_Care/DIY/BSS.jpg" },
    { name: "Chili Pepper Spray", originalPrice: 649, salePrice: 599, discount: 12   ,   image: "/Plants_Care/DIY/CPS.jpg" },
    { name: "	Coffee Grounds", originalPrice: 365, salePrice: 349, discount: 17      , image: "/Plants_Care/DIY/CG.jpg" },
    { name: "Cinnamon Powder", originalPrice: 499, salePrice: 399, discount: 11        , image: "/Plants_Care/DIY/CP.jpg" },
    { name: "Diatomaceous Earth	", originalPrice: 390, salePrice: 275, discount: 13    , image: "/Plants_Care/DIY/DE.jpg" },
    { name: "Eucalyptus Oil Spray", originalPrice: 455, salePrice: 399, discount: 14   , image: "/Plants_Care/DIY/EOS.jpg" },
    { name: "Turmeric Powder Mix", originalPrice: 633, salePrice: 599, discount: 17    , image: "/Plants_Care/DIY/IPM.jpg" },
    { name: "Clove Oil Solution", originalPrice: 322, salePrice: 299, discount: 11     , image: "/Plants_Care/DIY/LJS.jpg" },
    { name: "Peppermint Oil Spray	", originalPrice: 699, salePrice: 599, discount: 14, image: "/Plants_Care/DIY/POS.jpg" }
  ];
  
const DIY = () => {
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

export default DIY;
