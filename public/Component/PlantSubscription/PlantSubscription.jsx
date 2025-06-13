import React, { useState, useEffect } from "react";
import "./PlantSubscription.css";


import Plant_Sub_1 from "/PlantSub/img_1.webp";
import Plant_Sub_2 from "/PlantSub/img_2.webp";
import Plant_Sub_3 from "/PlantSub/img_3.webp";
import Plant_Sub_4 from "/PlantSub/img_4.webp";
import Plant_Sub_5 from "/PlantSub/img_5.webp";


const subscriptionData = [
  {
    boxColor: "#f0f8ff",
    plantImage: Plant_Sub_1,  // Picsum image
    title: "Indoor Delights",
    description: "A curated selection of indoor plants perfect for your home.",
  },
  {
    boxColor: "#fef7e6",
    plantImage: Plant_Sub_2,  // Picsum image
    title: "Outdoor Beauties",
    description: "Stunning outdoor plants to enhance your garden's charm.",
  },
  {
    boxColor: "#e6ffee",
    plantImage: Plant_Sub_3,  // Picsum image
    title: "Succulent Wonders",
    description: "Easy-to-care-for succulents handpicked for your collection.",
  },
  {
    boxColor: "#f8e6ff",
    plantImage: Plant_Sub_4,  // Picsum image
    title: "Flowering Joys",
    description: "Bring color to your life with these vibrant flowering plants.",
  },
  {
    boxColor: "#f8e6ff",
    plantImage: Plant_Sub_5,  // Picsum image
    title: "Flowering Joys",
    description: "Bring color to your life with these vibrant flowering plants.",
  },
];

function PlantSubscription() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === subscriptionData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Changes every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const { boxColor, plantImage, title, description } =
    subscriptionData[currentIndex];

  return (
    <section className="plant-subscription" style={{ backgroundColor: boxColor }}>
      <div className="content-container">
        <div className="text-container">
          <h2>Plant Subscriptions</h2>
          <h3>{title}</h3>
          <p>{description}</p>
          <button className="explore-button">Explore Boxes</button>
        </div>
        <div className="image-container">
          <img src={plantImage} alt={title} />
        </div>
      </div>
    </section>
  );
}

export default PlantSubscription;
