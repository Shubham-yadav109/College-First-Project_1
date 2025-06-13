import React, { useState } from "react";
import "./HappyPlantParents.css";

function HappyPlantParents() {
  const [reviews, setReviews] = useState([
    {
      name: "Rohit Sharma",
      rating: 5,
      comment: "Loved the plant quality! Fast delivery and amazing packaging.",
    },
    {
      name: "Anjali Verma",
      rating: 4,
      comment: "Beautiful plants and great customer service. Highly recommend!",
    },
  ]);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: "",
    comment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.rating && newReview.comment) {
      setReviews([...reviews, newReview]);
      setNewReview({ name: "", rating: "", comment: "" });
      alert("Thank you for your review!");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <section className="happy-plant-parents">
      <h2>Happy Plant Parents</h2>
      <p>Your feedback makes us grow! Share your experience with TreeSewa.</p>

      {/* Reviews Section */}
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <h3>{review.name}</h3>
            <p className="rating">Rating: {"⭐".repeat(review.rating)}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Add Review Form */}
      <div className="review-form-container">
        <h3>Leave Your Feedback</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={newReview.name}
            onChange={handleInputChange}
            required
          />
          <select
            name="rating"
            value={newReview.rating}
            onChange={handleInputChange}
            required
          >
            <option value="">Rate Us</option>
            <option value="5">⭐⭐⭐⭐⭐ - Excellent</option>
            <option value="4">⭐⭐⭐⭐ - Good</option>
            <option value="3">⭐⭐⭐ - Average</option>
            <option value="2">⭐⭐ - Poor</option>
            <option value="1">⭐ - Very Bad</option>
          </select>
          <textarea
            name="comment"
            placeholder="Your Comments"
            value={newReview.comment}
            onChange={handleInputChange}
            rows="4"
            required
          ></textarea>
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </section>
  );
}

export default HappyPlantParents;
