import React, { useState } from "react";
import "./Navbar.css";
import { FaTree, FaShoppingCart, FaSearch, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about", dropdown: ["Our Story", "Team"] },
    { name: "Shop", path: "/shop", dropdown: ["Shop by Category", "New Arrivals", "Best Sellers"] },
    { name: "Gifting", path: "/gifting", dropdown: ["Latest Posts", "Popular Topics"] },
    { name: "Contact", path: "/contact", dropdown: ["Customer Support", "Location"] },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <FaTree className="tree-icon" />
        <h1>TreeSewa</h1>
      </div>

      <div className={`menu ${isMobile ? "mobile-menu" : "desktop-menu"}`}>
        {menuItems.map((item, index) => (
          <div className="menu-item-container" key={index}>
            <Link to={item.path} className="menu-item">
              {item.name}
            </Link>
            {item.dropdown && (
              <ul className="dropdown">
                {item.dropdown.map((option, idx) => (
                  <li key={idx}>
                    <Link to={`${item.path}/${option.toLowerCase().replace(/\s+/g, "")}`}>
                      {option}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="navbar-icons">
        <div className="navbar-search">
          {showSearch && <input type="text" className="search-input visible" placeholder="Search..." />}
          <FaSearch className="icon" onClick={toggleSearch} />
        </div>
        <FaShoppingCart className="icon" />
        
        {/* Link to Login page */}
        <Link to="/login">
          <FaUser className="icon" />
        </Link>
      </div>

      <button className="menu-button" onClick={toggleMobileMenu} aria-label="Toggle menu">
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>

      {isMobile && (
        <div className="mobile-dropdown">
          {menuItems.map((item, index) => (
            <div className="dropdown-item-container" key={index}>
              <Link to={item.path} className="dropdown-item">
                {item.name}
              </Link>
              {item.dropdown && (
                <ul className="dropdown">
                  {item.dropdown.map((option, idx) => (
                    <li key={idx}>
                      <Link to={`${item.path}/${option.toLowerCase().replace(/\s+/g, "")}`}>
                        {option}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          {showSearch && <input type="text" className="search-input visible" placeholder="Search..." />}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
