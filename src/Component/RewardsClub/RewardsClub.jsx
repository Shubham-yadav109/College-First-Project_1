// import React from "react";
// import "./RewardsClub.css";
// import RewirdsPic from "/Reword/Reword_1.jpg"

// const handleReferFriend = async () => {
//   if (navigator.share) {
//     try {
//       await navigator.share({
//         title: 'Check out TreeSewa!',
//         text: 'I’m using TreeSewa to order plants. It’s awesome! 🌱 Check it out:',
//         url: 'https://www.treesewa.com', // ← yahan tumhare site ka link daalna
//       });
//       alert("Thanks for sharing!");
//     } catch (error) {
//       console.log("Sharing failed", error);
//     }
//   } else {
//     alert("Sharing not supported in your browser. Please copy the link manually.");
//   }
// };


// function RewardsClub() {
  
//   return (
//     <section className="rewards-club">
//       <div className="rewards-container">
//         <div className="rewards-content">
//           <h2>Join the TreeSewa Green Rewards Club</h2>
//           <p>
//             Every plant purchase is an opportunity to grow your rewards! Earn 
//             <strong> Green Coins</strong> on every order and redeem them for exclusive discounts 
//             and special offers.
//           </p>
//           <p>
//             Enjoy additional perks like early access to sales, personalized gardening tips, 
//             and special rewards for referrals. Spread the joy of planting by inviting your 
//             friends and earn bonus coins with every successful referral.
//           </p>
//           <button className="learn-more-btn" onClick={() => navigate("/learn-more")}>
//       Learn More
//     </button>
// <button className="refer-friend-btn" onClick={handleReferFriend}>
//   Refer a Friend
// </button>

//         </div>

//         <div className="rewards-image">
//           <img
//             src={RewirdsPic} 
//             alt="TreeSewa Rewards"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default RewardsClub;

import React from "react";
import { useNavigate } from "react-router-dom"; // ← Add this
import "./RewardsClub.css";
import RewirdsPic from "/Reword/Reword_1.jpg";

const handleReferFriend = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Check out TreeSewa!',
        text: 'I’m using TreeSewa to order plants. It’s awesome! 🌱 Check it out:',
        url: 'https://www.treesewa.com',
      });
      alert("Thanks for sharing!");
    } catch (error) {
      console.log("Sharing failed", error);
    }
  } else {
    alert("Sharing not supported in your browser. Please copy the link manually.");
  }
};

function RewardsClub() {
  const navigate = useNavigate(); // ← Initialize here

  return (
    <section className="rewards-club">
      <div className="rewards-container">
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
          
          {/* Learn More Button */}
          <button className="learn-more-btn" onClick={() => navigate("/learn-more")}>
            My Reward
          </button>

          {/* Refer a Friend Button */}
          <button className="refer-friend-btn" onClick={handleReferFriend}>
            Refer a Friend
          </button>
        </div>

        <div className="rewards-image">
          <img
            src={RewirdsPic} 
            alt="TreeSewa Rewards"
          />
        </div>
      </div>
    </section>
  );
}

export default RewardsClub;
