// import { Routes, Route } from "react-router-dom";
// import Home from "./Component/Home";
// import About from "./Component/Navbar/About/About";
// import Plants_Care from "./Component/Navbar/Plants_Care/Plants";
// import Gifting from "./Component/Navbar/Gifting/Gifting";
// import Contact from "./Component/Navbar/Contact/Contact";
// import Blog from "./Component/Navbar/Blog/Blog";
// import Pebbles from "./Component/Navbar/Plants_Care/Pebbles/Pebbles";
// import Register from "./Component/Login/UserLogin/Register/Register";
// import Login from './Component/Login/UserLogin/Register/Register'
// import AdminLogin from "./Component/Login/AdminLogin/AdminLogin";
// import AdminHome from "./Component/AdminHome/AdminHome";
// import Soil from "./Component/Navbar/Plants_Care/Soil/Soil";
// import Garden from "./Component/Navbar/Plants_Care/Garden/Garden";
// import Watering from "./Component/Navbar/Plants_Care/Watering/Watering";
// import DIY from "./Component/Navbar/Plants_Care/DIY/DIY";
// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/plants_care" element={<Plants_Care />} />
//       <Route path="/gifting" element={<Gifting />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/blog" element={<Blog />} />
//       <Route path="/register" element={<Register />} /> 
//       <Route path="/login" element={<Login/>}/>
//     <Route path="adminlogin" element={<AdminLogin/>}/>
//       <Route path="/pebbles" element={<Pebbles />} />
//       <Route path="/adminhome" element={<AdminHome/>}/>
//       <Route path="/soil" element={<Soil/>}/>
//       <Route path="/garden" element={<Garden/>}/>
//       <Route path="/watering" element={<Watering/>}/>
//       <Route path="/diy" element={<DIY/>}/>


//     </Routes>
//   );
// }

// export default App;




import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./Component/CardContext/CardContext"; 
import Home from "./Component/Home";
import About from "./Component/Navbar/About/About";
import Plants_Care from "./Component/Navbar/Plants_Care/Plants";
import Gifting from "./Component/Navbar/Gifting/Gifting";
import Contact from "./Component/Navbar/Contact/Contact";
import Blog from "./Component/Navbar/Blog/Blog";
import Pebbles from "./Component/Navbar/Plants_Care/Pebbles/Pebbles";
import Register from "./Component/Login/UserLogin/Register/Register";
import Login from "./Component/Login/UserLogin/Register/Register";
import AdminLogin from "./Component/Login/AdminLogin/AdminLogin";
import AdminHome from "./Component/AdminHome/AdminHome";
import Soil from "./Component/Navbar/Plants_Care/Soil/Soil";
import Garden from "./Component/Navbar/Plants_Care/Garden/Garden";
import Watering from "./Component/Navbar/Plants_Care/Watering/Watering";
import DIY from "./Component/Navbar/Plants_Care/DIY/DIY";

import Card from './Component/Card/Card';
import Payment from "./Component/Payment/Payment";
import GB from "./Component/Navbar/Blog/Garden_Basice/GB";
import GM from "./Component/Navbar/Blog/Garden_Maintenancs/GM";
import GL from "./Component/Navbar/Blog/Greenl/GL";
import KG from "./Component/Navbar/Blog/KitechenG/KG";
import OG from "./Component/Navbar/Blog/OrnamentalG/OG";

import Rewards from "./Component/RewardsClub/Rewards/Rewaed";
import ProductDetail from "./Component/Bestsellers/ViewAll/ProductDetail";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/plants-care" element={<Plants_Care />} />
        <Route path="/gifting" element={<Gifting />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/pebbles" element={<Pebbles />} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/soil" element={<Soil />} />
        <Route path="/garden" element={<Garden />} />
        <Route path="/watering" element={<Watering />} />
        <Route path="/diy" element={<DIY />} />
        <Route path="/cart" element={<Card/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/gb" element={<GB/>}/>
        <Route path="/gm" element={<GM/>}/>
        <Route path="/gl" element={<GL/>}/>
        <Route path="/kg" element={<KG/>}/>
        <Route path="/og" element={<OG/>}/>
     
        <Route path="/learn-more" element={<Rewards />} />
        <Route path="/product" element={<ProductDetail />} />
      


      </Routes>
    </CartProvider>
  );
}

export default App;
