// import React, { createContext, useState } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     const price = product.salePrice || product.originalPrice; 

//     if (!price || isNaN(price)) {
//         console.error("Invalid product price:", product);
//         return;
//     }

//     setCart((prevCart) => {
//         const existingItem = prevCart.find((item) => item.id === product.id);
//         if (existingItem) {
//             return prevCart.map((item) =>
//                 item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//             );
//         } else {
//             return [...prevCart, { ...product, quantity: 1, price }];
//         }
//     });
// };


//   const increaseQuantity = (id) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   const decreaseQuantity = (id) => {
//     setCart((prevCart) =>
//       prevCart
//         .map((item) =>
//           item.id === id ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   const getTotalItems = () => {
//     return cart.reduce((total, item) => total + item.quantity, 0);
//   };

//   const getTotalPrice = () => {
//     return cart.reduce((total, item) => total + (item.price * item.quantity || 0), 0).toFixed(2);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, getTotalPrice, getTotalItems }}>
//       {children}
//     </CartContext.Provider>
//   );
// };




import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ✅ Add item to cart
  const addToCart = (product) => {
    const price = product.salePrice || product.originalPrice;

    if (!price || isNaN(price)) {
      console.error("Invalid product price:", product);
      return;
    }

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1, price }];
      }
    });
  };

  // ✅ Increase quantity
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // ✅ Decrease quantity
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity - 1) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // ✅ Get total quantity of items
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // ✅ Get total price
  const getTotalPrice = () => {
    return cart
      .reduce((total, item) => total + (item.price * item.quantity || 0), 0)
      .toFixed(2);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        getTotalPrice,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
