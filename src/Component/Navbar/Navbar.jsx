import React, { useContext, useState } from "react";
import { FaTree, FaShoppingCart, FaSearch, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../CardContext/CardContext"; 
import "./Navbar.css"; 

const Navbar = () => {
    const { getTotalItems } = useContext(CartContext);
    const [isMobile, setIsMobile] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <FaTree className="tree-icon" />
                <h1>TreeSewa</h1>
            </div>

            <div className={`menu ${isMobile ? "mobile-menu active" : "desktop-menu"}`}>
                <Link to="/" className="menu-item">🏠 Home</Link>
                <Link to="/about" className="menu-item">About</Link>
                <Link to="/plants-care" className="menu-item">Plants Care</Link>
                <Link to="/gifting" className="menu-item">Gifting</Link>
                <Link to="/contact" className="menu-item">Booking</Link>
                <Link to="/blog" className="menu-item">Blog</Link>
            </div>

            <div className="navbar-icons">
                <FaSearch className="icon" onClick={() => setShowSearch(!showSearch)} />
                
                <Link to="/cart" className="cart-link">
                    <FaShoppingCart className="icon" />
                    {getTotalItems() > 0 && <span className="cart-count">{getTotalItems()}</span>}
                </Link>

                <FaUser className="icon" onClick={() => navigate("/register")} />
            </div>

            <button className="menu-button" onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? <FaTimes /> : <FaBars />}
            </button>
        </nav>
    );
};

export default Navbar;
