import React from "react";
import "./Plantcategories.css";
import NewArrivel from "/PlantCotegories/NewArrivel.png"
import Tomato from     "/PlantCotegories/Tamota.png"
import Tree1 from      "/PlantCotegories/Tree1.png"
import Tree2 from      "/PlantCotegories/Tree2.png"
import Tree3 from      "/PlantCotegories/Tree3.png"
import Tree4 from      "/PlantCotegories/Postic.png"
function Plantcategories() {
  const circles = [
    { name: "Bestsellers", image:  Tree3},
    { name: "New Arrivals", image:  NewArrivel},
    { name: "Vegetable Seeds", image: Tomato },
    { name: "Easy to Care", image: Tree1 },
    { name: "XL plants", image: Tree2 },
    { name: "Fertilisers", image: Tree4 },
  ];      

  return (
    <div className="circular-container">
      <h1 className="title">Explore Our Plant Categories</h1>
      <div className="circle-row">
        {circles.map((circle, index) => (
          <div key={index} className="circle-container">
            <div className="circle">
              <div className="circle-image-wrapper">
                <img
                  src={circle.image}
                  alt={circle.name}
                  className="circle-image"
                />
              </div>
            </div>
            <p className="circle-name">{circle.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plantcategories;
