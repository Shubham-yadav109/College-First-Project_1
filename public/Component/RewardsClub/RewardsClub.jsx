import React from "react";
import "./RewardsClub.css";
import RewirdsPic from "/Reword/Reword_1.jpg"

function RewardsClub() {
  return (
    <section className="rewards-club">
      <div className="rewards-container">
        {/* Left Section: Text Content */}
        <div className="rewards-content">
          <h2>Join the TreeSewa Green Rewards Club</h2>
          <p>
            Every plant purchase is an opportunity to grow your rewards! Earn 
            <strong> Green Coins</strong> on every order and redeem them for exclusive discounts 
            and special offers.
          </p>
          <p>
            Enjoy additional perks like early access to sales, personalized gardening tips, 
            and special rewards for referrals. Spread the joy of planting by inviting your 
            friends and earn bonus coins with every successful referral.
          </p>
          <button className="learn-more-btn">Learn More</button>
          <button className="refer-friend-btn">Refer a Friend</button>
        </div>

        {/* Right Section: Image */}
        <div className="rewards-image">
          <img
            src={RewirdsPic}  // Picsum image
            alt="TreeSewa Rewards"
          />
        </div>
      </div>
    </section>
  );
}

export default RewardsClub;
