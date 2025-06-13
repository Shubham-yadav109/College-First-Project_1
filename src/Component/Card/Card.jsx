// import React, { useContext } from "react";
// import { CartContext } from "../CardContext/CardContext"; 
// import { useNavigate } from "react-router-dom";
// import "./Card.css"; 
// import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";

// const Cart = () => {
//   const { cart, increaseQuantity, decreaseQuantity, getTotalPrice } = useContext(CartContext);
//   const navigate = useNavigate();

  
//   const handleBuyNow = () => {
  
//     navigate("/payment", { state: { cart, totalAmount: getTotalPrice() } });
//   };

  
//   return (
//     <div className="main-div">
//       <Navbar />
//       <div className="cart-container">
//         <h2>Shopping Cart</h2>
//         {cart.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <div>
//             {cart.map((item, index) => (
//               <div key={`${item.id}-${index}`} className="cart-item"> 
//                 <img src={item.image} alt={item.name} className="cart-item-image" /> 

//                 <div className="cart-item-details">
//                   <h3>{item.name}</h3>
//                   <p>Price: ₹{item.salePrice ? item.salePrice.toFixed(2) : "0.00"}</p>

//                   <div className="quantity-control">
//                     <button onClick={() => decreaseQuantity(item.id)}>-</button>
//                     <span>{item.quantity}</span>
//                     <button onClick={() => increaseQuantity(item.id)}>+</button>
//                   </div>

//                   <p>Total: ₹{(item.salePrice * item.quantity).toFixed(2)}</p>
//                 </div>
//               </div>
//             ))}

//             <h3>Total Price: ₹{getTotalPrice()}</h3>
//             <button className="buy-now" onClick={handleBuyNow}>Buy Now</button>
//           </div>
//         )}
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Cart;


import React, { useContext } from "react";
import { CartContext } from "../CardContext/CardContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Card.css";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, getTotalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate("/payment", {
      state: {
        cart,
        totalAmount: getTotalPrice()
      }
    });
  };

  return (
    <div className="main-div">
      <Navbar />
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={`${item.id}-${index}`} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ₹{item.price.toFixed(2)}</p>
                  <div className="quantity-control">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                  <p>Total: ₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}

            <h3>Total Price: ₹{getTotalPrice()}</h3>
            <button className="buy-now" onClick={handleBuyNow}>Buy Now</button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
