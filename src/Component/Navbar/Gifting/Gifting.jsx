// import React from 'react';
// import './Gifting.css';
// import { useNavigate, Link } from 'react-router-dom';
// import Navbar from '../Navbar';
// import Footer from '../../Footer/Footer';

// const Gifting = () => {
//   const navigate = useNavigate();

//   const giftOptions = [
//     { id: 1, name: "Corporate Gifts"    , path: "/Component/Navbar/Gifting/Gift/Corporate/Corporate",                  img: "BlogImg/G8.webp" },
//     { id: 2, name: "Personalized Plants", path: "/Component/Navbar/Gifting/Gift/Personalized/Personalized",        img: "BlogImg/G2.webp" },
//     { id: 3, name: "Plants For Gifting" , path: "/Component/Navbar/Gifting/Gift/PlantsForGifting/PlantsForGifting", img: "BlogImg/G7.webp" },
//     { id: 4, name: "Indoor Plants"      , path: "/Component/Navbar/Gifting/Gift/Indoor/Indoor",                          img: "BlogImg/G4.webp" },
//     { id: 5, name: "Outdoor Plants"     , path: "/Component/Navbar/Gifting/Gift/Outdoor/Outdoor",                       img: "BlogImg/G9.webp" },
//     { id: 6, name: "Bonsai Gifts", path: "/Component/Navbar/Gifting/Gift/Bonsai/Bonsai",                           img: "BlogImg/G6.webp" }
//   ];

//   return (
//     <div>

//       <Navbar/>
//     <div className="gifting-container">
//       <h1 className="gifting-title">Choose Your Perfect Gift</h1>
//       <div className="gifting-grid">
//         {giftOptions.map((gift) => (
//           <div key={gift.id} className="gift-card">
//             <img src={gift.img} alt={gift.name} className="gift-image" />
//             <h2>{gift.name}</h2>
//             <button className="more-btn" onClick={() => navigate(gift.path)}>More</button>
//           </div>
//         ))}
//       </div>

//       <div className="go-home-btn">
//         <Link to="/">
//           <button>🏠 Go Home</button>
//         </Link>
//       </div>
//     </div>

//     <Footer/>
// </div>
//   );
// };

// export default Gifting;


import React from "react";
import "./Gifting.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../../Footer/Footer";

const Gifting = () => {
  return (
    <div>
      <Navbar />
      <div className="gifting-container">
        <h1 className="gifting-title">Choose Your Perfect Gift</h1>
        <div className="gifting-grid">
          <div className="gift-card">
            <img src="BlogImg/G8.webp" alt="Corporate Gifts" className="gift-image" />
            <h2>Corporate Gifts</h2>
            <Link to="/corporate">
              <button className="more-btn">More</button>
            </Link>
          </div>

          <div className="gift-card">
            <img src="BlogImg/G2.webp" alt="Personalized Plants" className="gift-image" />
            <h2>Personalized Plants</h2>
            <Link to="/personalized">
              <button className="more-btn">More</button>
            </Link>
          </div>

          <div className="gift-card">
            <img src="BlogImg/G7.webp" alt="Plants For Gifting" className="gift-image" />
            <h2>Plants For Gifting</h2>
            <Link to="/plantsforgifting">
              <button className="more-btn">More</button>
            </Link>
          </div>

          <div className="gift-card">
            <img src="BlogImg/G4.webp" alt="Indoor Plants" className="gift-image" />
            <h2>Indoor Plants</h2>
            <Link to="/indoor">
              <button className="more-btn">More</button>
            </Link>
          </div>

          <div className="gift-card">
            <img src="BlogImg/G9.webp" alt="Outdoor Plants" className="gift-image" />
            <h2>Outdoor Plants</h2>
            <Link to="/outdoor">
              <button className="more-btn">More</button>
            </Link>
          </div>

          <div className="gift-card">
            <img src="BlogImg/G6.webp" alt="Bonsai Gifts" className="gift-image" />
            <h2>Bonsai Gifts</h2>
            <Link to="/bonsai">
              <button className="more-btn">More</button>
            </Link>
          </div>
        </div>

        
      </div>
      <Footer />
    </div>
  );
};

export default Gifting;
