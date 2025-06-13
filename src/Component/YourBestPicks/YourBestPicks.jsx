import React from "react";
import "./YourBestPicks.css";
import plants from         "/BestPic/Plants.png";
import seeds from          "/BestPic/Seeds.png";
import pots from           "/BestPic/Pots&Planters.png";
import plantCare from      "/BestPic/Plantcare.png";


const categoryImages = {
  plants: plants, 
  seeds: seeds,
  pots: pots,  
  plantCare: plantCare, 
};

const YourBestPicks = () => {
  const categories = [
    { name: "Plants", imageUrl: categoryImages.plants },
    { name: "Seeds", imageUrl: categoryImages.seeds },
    { name: "Pots & Planters", imageUrl: categoryImages.pots },
    { name: "Plant Care", imageUrl: categoryImages.plantCare },
  ];

  return (
    <div className="best-picks">
      <h1 className="section-title">Your Best Picks</h1>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <img
              src={category.imageUrl}
              alt={category.name}
              className="category-image"
            />
            <h3 className="category-name">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBestPicks;
