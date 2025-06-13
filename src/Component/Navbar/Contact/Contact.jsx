import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";
import Navbar from "../Navbar";
import Footer from "../../Footer/Footer";

const statesAndDistricts = {
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Prayagraj", "Agra"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
  "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain"],
  "West Bengal": ["Kolkata", "Howrah", "Darjeeling", "Siliguri", "Asansol"],
  "Rajasthan": ["Jaipur", "Udaipur", "Jodhpur", "Kota", "Bikaner"],
  "Karnataka": ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"],
  "Punjab": ["Amritsar", "Ludhiana", "Jalandhar", "Patiala", "Bathinda"],
};

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    telephoneNumber: "",
    time: "",
    date: "",
    fullAddress: "",
    state: "",
    district: "",
  });

  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStateChange = (e) => {
    setFormData({ ...formData, state: e.target.value, district: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, mobileNumber, date, fullAddress, state, district } = formData;

    if (!firstName || !lastName || !mobileNumber || !date || !fullAddress || !state || !district) {
      alert("Please fill all required fields!");
      return;
    }

    setBookingSuccess(true);
    setTimeout(() => setBookingSuccess(false), 3000);
  };

  return (
    <div>
<Navbar/>

    <div className="contact-container">
    <div className="contact-form">
      <h2>Assistance Booking</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
        <input type="tel" name="mobileNumber" placeholder="Mobile Number" onChange={handleChange} required />
        <input type="tel" name="telephoneNumber" placeholder="Telephone Number (Optional)" onChange={handleChange} />
  
        <select name="time" onChange={handleChange} required>
          <option value="">Select Time</option>
          <option value="8:00 to 9:00">8:00 to 9:00</option>
          <option value="9:00 to 10:00">9:00 to 10:00</option>
        </select>
        <input type="date" name="date" onChange={handleChange} required />
        <input type="text" name="fullAddress" placeholder="Full Address" onChange={handleChange} required />
  
        <select name="state" value={formData.state} onChange={handleStateChange} required>
          <option value="">Select State</option>
          {Object.keys(statesAndDistricts).map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
  
        <select name="district" value={formData.district} onChange={handleChange} required>
          <option value="">Select District</option>
          {formData.state && statesAndDistricts[formData.state].map((district) => (
            <option key={district} value={district}>{district}</option>
          ))}
        </select>
  
        <button type="submit">Book</button>
      </form>
  
      {bookingSuccess && (
        <div className="success-message">
          <div className="blue-tick">✔</div>
          <p>Your assistance is booked!</p>
        </div>
      )}
    </div>
  
    <div className="contact-right">
      <img src="BlogImg/Contact_1.webp" alt="Contact Visual" className="contact-image" />
      
      <div className="contact-info">
        <p>📞 Call: +91-8969545696</p>
        <p>📧 Email: support@TreeSewa.com</p>
      </div>
  
      <button className="home-btn" onClick={() => navigate("/")}>🏠 Go Home</button>
    </div>
  </div>
  
<Footer/>
  </div>
  );
};

export default Contact;
