import React from "react";
import "./ShopBy.css";

const ShopBy = () => {
  const categories = [
    { title: "Birthday Gifts", image: "https://picsum.photos/300/200?random=1", link: "/birthday-gifts" },
    { title: "Anniversary Gifts", image: "https://picsum.photos/300/200?random=2", link: "/anniversary-gifts" },
    { title: "Thank You", image: "https://picsum.photos/300/200?random=3", link: "/thank-you" },
    { title: "Housewarming Plants", image: "https://picsum.photos/300/200?random=4", link: "/housewarming-plants" },
  ];

  return (
    <div className="shopby-container">
      <h1 className="shopby-title">Shop by</h1>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div className="category-box" key={index}>
            <div className="category-image-container">
              <img
                src={category.image}
                alt={category.title}
                className="category-image"
              />
            </div>
            <a href={category.link} className="category-title-button">
              {category.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopBy;
