import React from 'react';
import './PlantsGrow.css'; // Import your CSS file

function PlantsGrow() {
  return (
    <div className="container">
      <div className="heart-container">
        <div className="heart-left"></div>
        <div className="heart-right"></div>
      </div>
      <span className="text">Plants Grow People</span>

      {/* Duplicate the heart and text for the second element */}
      <div className="heart-container">
        <div className="heart-left"></div>
        <div className="heart-right"></div>
      </div>
      <span className="text">Plants Grow People</span>
    </div>
  );
}

export default PlantsGrow;



