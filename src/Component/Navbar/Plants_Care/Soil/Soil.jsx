import React ,{useContext} from "react";
import { Link } from "react-router-dom"; 
import "./Soil.css";
import Navbar from "../../Navbar";
import Footer from "../../../Footer/Footer";
import { CartContext } from "../../../CardContext/CardContext";

const products = [
    { name: " Garden Top Soil", originalPrice: 200, salePrice: 180, discount: 10           , image: "/Plants_Care/Soil_Manure/GTS.jpg" },
    { name: "Vermicompost", originalPrice: 250, salePrice: 213, discount: 15               , image: "/Plants_Care/Soil_Manure/V.jpg" },
    { name: "Cocopeat", originalPrice: 180, salePrice: 171, discount: 5                    , image: "/Plants_Care/Soil_Manure/c.jpg"},
    { name: "Cow Dung Manure	", originalPrice: 220, salePrice: 194, discount: 12          , image: "/Plants_Care/Soil_Manure/images.jpg" },
    { name: "Bone Meal	", originalPrice: 300, salePrice: 270, discount: 10                , image: "/Plants_Care/Soil_Manure/BM.jpg" },
    { name: "Neem Cake	", originalPrice: 275, salePrice: 253, discount: 10                , image: "/Plants_Care/Soil_Manure/NC.jpg" },
    { name: "Humic Acid	", originalPrice: 350, salePrice: 315, discount: 10                , image: "/Plants_Care/Soil_Manure/PF.jpg" },
    { name: "Potash Fertilizer	", originalPrice: 280, salePrice: 252, discount: 10        , image: "/Plants_Care/Soil_Manure/SP.jpg" },
    { name: "Super Phosphate	", originalPrice: 260, salePrice: 229, discount: 12          , image: "/Plants_Care/Soil_Manure/A.jpg" },
    { name: "Azotobacter", originalPrice: 400, salePrice: 340, discount: 15                , image: "/Plants_Care/Soil_Manure/OM.jpg"},
    { name: "Organic Manure", originalPrice: 210, salePrice: 199, discount: 5              , image: "/Plants_Care/Soil_Manure/MF.jpg" },
    { name: "Micronutrient Fertilizer	", originalPrice: 400, salePrice: 199, discount: 5   , image: "/Plants_Care/Soil_Manure/HA.jpg" }
  ];
  


const Soil = () => {
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

export default Soil;
