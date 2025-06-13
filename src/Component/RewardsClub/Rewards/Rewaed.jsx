import React from "react";
import "./Rewards.css";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";

const rewardsData =  [
    { id: 1, title: "Welcome Bonus", amount: "₹100", description: "You received a welcome reward for signing up on TreeSewa.", date: "21 Apr 2025" },
    { id: 2, title: "Plant Purchase Reward", amount: "₹50", description: "Reward for purchasing a money plant.", date: "20 Apr 2025" },
    { id: 3, title: "Referral Bonus", amount: "₹200", description: "You referred your friend Rahul and earned a bonus.", date: "19 Apr 2025" },
    { id: 4, title: "Festival Offer Reward", amount: "₹75", description: "Special reward during TreeSewa Green Diwali Offer.", date: "15 Apr 2025" },
    { id: 5, title: "Combo Pack Bonus", amount: "₹120", description: "You earned a reward for purchasing a combo pack of 5 plants.", date: "14 Apr 2025" },
    { id: 6, title: "Review & Rating Reward", amount: "₹30", description: "Thank you for reviewing your recent purchase.", date: "13 Apr 2025" },
    { id: 7, title: "Loyalty Bonus - 3rd Order", amount: "₹80", description: "Congrats! You placed your 3rd order and earned a loyalty bonus.", date: "12 Apr 2025" },
    { id: 8, title: "Birthday Gift Reward", amount: "₹150", description: "Happy Birthday! Here’s a gift from TreeSewa.", date: "10 Apr 2025" },
    { id: 9, title: "Flash Sale Participation", amount: "₹60", description: "You participated in the 2-hour flash sale.", date: "08 Apr 2025" },
    { id: 10, title: "Newsletter Subscription", amount: "₹20", description: "Reward for subscribing to TreeSewa updates.", date: "06 Apr 2025" },
    { id: 11, title: "Referral Milestone - 5 Friends", amount: "₹300", description: "You referred 5 friends to TreeSewa!", date: "05 Apr 2025" },
    { id: 12, title: "App Download Bonus", amount: "₹40", description: "Thanks for downloading the TreeSewa app.", date: "04 Apr 2025" },
    { id: 13, title: "Prepaid Order Bonus", amount: "₹35", description: "You chose prepaid payment and earned a reward.", date: "03 Apr 2025" },
    { id: 14, title: "Tree Plantation Donation Reward", amount: "₹100", description: "Thank you for donating a tree!", date: "02 Apr 2025" },
    { id: 15, title: "Wishlist Activity", amount: "₹15", description: "You added 5+ plants to your wishlist.", date: "01 Apr 2025" },
    { id: 16, title: "Cart Reminder Bonus", amount: "₹25", description: "Thanks for completing your cart purchase.", date: "31 Mar 2025" },
    { id: 17, title: "Weekly Login Streak", amount: "₹50", description: "You logged in every day for a week!", date: "30 Mar 2025" },
    { id: 18, title: "First Delivery Review", amount: "₹20", description: "Thanks for sharing your delivery experience.", date: "29 Mar 2025" },
    { id: 19, title: "Refer & Earn: Family Member", amount: "₹150", description: "You referred your family member to TreeSewa.", date: "28 Mar 2025" },
    { id: 20, title: "Green Friday Offer", amount: "₹70", description: "You bought during our Green Friday event!", date: "27 Mar 2025" },
    { id: 21, title: "Seasonal Plant Reward", amount: "₹55", description: "You purchased a seasonal flowering plant.", date: "25 Mar 2025" },
    { id: 22, title: "New User Referral Gift", amount: "₹100", description: "Your referred user placed their first order!", date: "24 Mar 2025" },
    { id: 23, title: "Gardening Tip Participation", amount: "₹10", description: "You shared your gardening tip with the community.", date: "22 Mar 2025" },
    { id: 24, title: "Live Event Bonus", amount: "₹60", description: "You attended our live Tree Talk event!", date: "20 Mar 2025" },
    { id: 25, title: "Plant Health Check", amount: "₹35", description: "Thanks for submitting your plant’s health photo.", date: "19 Mar 2025" },
    { id: 26, title: "Repeat Purchase Reward", amount: "₹45", description: "You reordered the same plant again.", date: "18 Mar 2025" },
    { id: 27, title: "Bulk Order Bonus", amount: "₹180", description: "You ordered 10+ plants in a single order.", date: "16 Mar 2025" },
    { id: 28, title: "TreeSewa Anniversary Offer", amount: "₹90", description: "Celebrating TreeSewa’s 2nd anniversary!", date: "15 Mar 2025" },
    { id: 29, title: "Friend's First Order Bonus", amount: "₹70", description: "Your friend’s first purchase through your link.", date: "13 Mar 2025" },
    { id: 30, title: "Eco Warrior Reward", amount: "₹100", description: "Rewarded for returning plastic pots for recycling.", date: "12 Mar 2025" },
    { id: 31, title: "Referral Champion", amount: "₹300", description: "You became a top 10 referrer of the month!", date: "10 Mar 2025" },
    { id: 32, title: "Free Delivery Coupon Used", amount: "₹25", description: "You earned a bonus for using your free delivery coupon.", date: "09 Mar 2025" },
    { id: 33, title: "Green Quiz Winner", amount: "₹120", description: "Congrats! You won our Green Awareness Quiz.", date: "08 Mar 2025" },
    { id: 34, title: "Custom Plant Message", amount: "₹15", description: "You added a personalized message with your plant.", date: "06 Mar 2025" },
    { id: 35, title: "Selfie with Plant Contest", amount: "₹80", description: "You posted a selfie with your TreeSewa plant!", date: "04 Mar 2025" },
    { id: 36, title: "Order Feedback", amount: "₹20", description: "You provided detailed feedback on your last order.", date: "03 Mar 2025" },
    { id: 37, title: "New City Launch Bonus", amount: "₹100", description: "TreeSewa just launched in your city!", date: "01 Mar 2025" },
    { id: 38, title: "Top Spender of the Week", amount: "₹250", description: "You were the top customer this week!", date: "28 Feb 2025" },
    { id: 39, title: "Plant Care Reminder Participation", amount: "₹10", description: "You turned on watering reminders.", date: "27 Feb 2025" },
    { id: 40, title: "Payment with UPI", amount: "₹15", description: "You paid using UPI and received a reward.", date: "26 Feb 2025" },
    { id: 41, title: "Friend Gift Delivery", amount: "₹50", description: "You sent a plant as a gift using TreeSewa.", date: "24 Feb 2025" },
    { id: 42, title: "Live Chat Help Usage", amount: "₹5", description: "Thanks for using our chatbot for queries!", date: "22 Feb 2025" },
    { id: 43, title: "Festival Decor Collection", amount: "₹65", description: "You bought our special festive decor plants.", date: "21 Feb 2025" },
    { id: 44, title: "Plant Subscription Plan", amount: "₹200", description: "Subscribed to monthly plant delivery.", date: "20 Feb 2025" },
    { id: 45, title: "Weekend Deal Claim", amount: "₹30", description: "You claimed a weekend flash offer.", date: "18 Feb 2025" },
    { id: 46, title: "First COD Order", amount: "₹20", description: "Reward for your first cash-on-delivery order.", date: "17 Feb 2025" },
    { id: 47, title: "Home Visit Booking", amount: "₹70", description: "Booked an expert visit for plant care.", date: "15 Feb 2025" },
    { id: 48, title: "Profile Completion Bonus", amount: "₹25", description: "You completed your profile details.", date: "14 Feb 2025" },
    { id: 49, title: "Anniversary Gift Order", amount: "₹100", description: "You ordered a plant gift for an anniversary.", date: "12 Feb 2025" },
    { id: 50, title: "Long-Time Customer", amount: "₹300", description: "Thank you for being with TreeSewa for over 1 year!", date: "10 Feb 2025" }
  ];
  

const Rewards = () => {
  return (
    <div className="Main-Class-Name">
      <Navbar/>
    <div className="rewards-page">
      <h1 className="rewards-heading">My Rewards</h1>
      <div className="rewards-container">
        {rewardsData.map((reward) => (
          <div key={reward.id} className="reward-card">
            <div className="reward-strip">
              <span className="reward-title">{reward.title}</span>
              <span className="reward-amount">{reward.amount}</span>
            </div>
            <div className="reward-details">
              <p className="reward-description">{reward.description}</p>
              <p className="reward-date">{reward.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Rewards;