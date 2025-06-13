import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import QRCode from "qrcode";
import "./Payment.css";
import Footer  from '../../Component/Footer/Footer';
import Navber from '../../Component/Navbar/Navbar';

const Payment = () => {
  const location = useLocation();
  const { cart, totalAmount } = location.state;
  const navigate = useNavigate();

  const [upiNumber, setUpiNumber] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [receiptVisible, setReceiptVisible] = useState(false);
  const [receiptDetails, setReceiptDetails] = useState({});

  const [showCardSection, setShowCardSection] = useState(false);
  const [selectedBank, setSelectedBank] = useState("");
  const [cardDetails, setCardDetails] = useState({ name: "", number: "", expiry: "", cvv: "" });
  const [showOtpSection, setShowOtpSection] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [processing, setProcessing] = useState(false);

  const banks = [
    "SBI", "HDFC", "ICICI", "PNB", "Axis Bank", "Bank of Baroda", "Canara Bank", "Union Bank", "Kotak Mahindra", "Yes Bank"
  ];


  const orderDetails = {
    plantName: cart.map(item => item.name).join(", "),  
    orderDate: new Date().toLocaleDateString(),
    orderTime: new Date().toLocaleTimeString(),
    deliveryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    packingCharge: 150.0,
    totalAmount: totalAmount,
  };
  

  const handleUpiPayment = () => {
    if (upiNumber.length !== 10) {
      alert("Please enter a valid 10-digit UPI number.");
      return;
    }
    setPaymentStatus("UPI payment initiated...");
    setTimeout(() => {
      setPaymentStatus("Payment successful!");
      setReceiptVisible(true);
      setReceiptDetails(orderDetails);
    }, 3000);
  };

  const handleCardSubmit = () => {
    const { name, number, expiry, cvv } = cardDetails;
    if (!selectedBank || number.length !== 16 || expiry.length !== 5 || cvv.length !== 3) {
      alert("Please fill valid card details.");
      return;
    }
    setShowOtpSection(true);
  };

  const handleOtpChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const handleOtpSubmit = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setPaymentStatus("Payment successful!");
      setReceiptVisible(true);
      setReceiptDetails(orderDetails);
    }, 5000);
  };




  const handleDownloadReceipt = async () => {
    const doc = new jsPDF();
    doc.setFillColor(230, 255, 230);
    doc.rect(0, 0, 210, 297, "F");
    doc.setFontSize(18);
    doc.text(" TreeSewa - Payment Receipt", 20, 20);
    doc.setFontSize(12);
    doc.text(`Plant Name: ${receiptDetails.plantName}`, 20, 40);
    doc.text(`Packing & Delivery: =${receiptDetails.packingCharge}`, 20, 50);
    doc.text(`Total Amount: =${receiptDetails.totalAmount}`, 20, 60);
    doc.text(`Booking Date: ${receiptDetails.orderDate}`, 20, 70);
    doc.text(`Booking Time: ${receiptDetails.orderTime}`, 20, 80);
    doc.text(`Expected Delivery: ${receiptDetails.deliveryDate}`, 20, 90);
    doc.text("Note: Given delivery charge when your item is delivered. =150 to the delivery boy (Online or Cash)", 20, 110);
    doc.text("-----------------------------------------------------------------------------------------------------------------------------------",20,120)
    doc.text("*** Importent Information : ",20,130);
    doc.text("-->  Trees are precious for life.", 20, 140); 
    doc.text("-->  They clean the air, give shade & support nature.", 20, 150); 
    doc.text("-->  Plant more trees for a greener future.", 20, 160); 
    doc.text("-->  Conserving natural resources is our responsibility.", 20, 170); 
    doc.text("-->  Everyone should help in planting trees.", 20, 180); 

    
    const qrData = `
  Plant: ${receiptDetails.plantName}
  Total: ₹${receiptDetails.totalAmount}
  Packing: ₹${receiptDetails.packingCharge}
  Date: ${receiptDetails.orderDate}
  Time: ${receiptDetails.orderTime}
  Delivery: ${receiptDetails.deliveryDate}
    `.trim();
  
    const qrImage = await QRCode.toDataURL(qrData);
  
    doc.addImage(qrImage, "PNG", 140, 40, 50, 50); 
    doc.save("TreeSewa_Receipt.pdf");


  };
  

  return (
   <div>
    <Navber/>
    <div className="payment-container">
      <h2>Payment Page</h2>
      <h3>Total Amount: ₹{totalAmount}</h3>
      <h4> Packing + Delivery = ₹150 on Case</h4>

      <div>
        {cart.map((item) => (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ₹{(item.salePrice * item.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>

      <div className="payment-form">
        <input
          type="text"
          placeholder="Enter 10-digit UPI number"
          value={upiNumber}
          onChange={(e) => {
            const val = e.target.value;
            if (/^\d{0,10}$/.test(val)) {
              setUpiNumber(val);
            }
          }}
          className="payment-input"
        />
        <button
          onClick={handleUpiPayment}
          className="payment-button"
          disabled={upiNumber.length !== 10}
        >
          Pay with UPI
        </button>

        <button onClick={() => setShowCardSection(true)} className="payment-button">
          Card Payment
        </button>
      </div>

      {showCardSection && (
        <div className="card-section">
          <select
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
            className="payment-input"
          >
            <option value="">Choose your bank</option>
            {banks.map((bank) => (
              <option key={bank} value={bank}>{bank}</option>
            ))}
          </select>

          {selectedBank && (
            <>
              <input
                type="text"
                placeholder="Name (Optional)"
                className="payment-input"
                value={cardDetails.name}
                onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Card Number"
                maxLength={16}
                className="payment-input"
                value={cardDetails.number}
                onChange={(e) => {
                  if (/^\d{0,16}$/.test(e.target.value)) {
                    setCardDetails({ ...cardDetails, number: e.target.value });
                  }
                }}
              />
              <input
                type="text"
                placeholder="MM/YY"
                maxLength={5}
                className="payment-input"
                value={cardDetails.expiry}
                onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
              />
              <input
                type="password"
                placeholder="CVV"
                maxLength={3}
                className="payment-input"
                value={cardDetails.cvv}
                onChange={(e) => {
                  if (/^\d{0,3}$/.test(e.target.value)) {
                    setCardDetails({ ...cardDetails, cvv: e.target.value });
                  }
                }}
              />
              <button onClick={handleCardSubmit} className="payment-button">Proceed</button>
            </>
          )}
        </div>
      )}

      {showOtpSection && (
        <div className="otp-section">
          <p>See registered number to enter OTP for successful payment</p>
          <div className="otp-inputs">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                type="text"
                maxLength="1"
                className="otp-box"
                value={digit}
                onChange={(e) => handleOtpChange(idx, e.target.value)}
              />
            ))}
          </div>
          <button onClick={handleOtpSubmit} className="payment-button">Submit</button>
        </div>
      )}

      {processing && (
        <div className="processing-overlay">
          <div className="processing-box">
            <p>Processing...</p>
            <div className="loader"></div>
          </div>
        </div>
      )}

      {paymentStatus && <p className="payment-status">{paymentStatus}</p>}

      {receiptVisible && (
        <div style={{ marginTop: "20px" }}>
          <button onClick={handleDownloadReceipt} className="payment-button">
            Download Receipt (PDF)
          </button>
        </div>
      )}
    </div>
    <Footer/>
    </div>
  );
};

export default Payment;
