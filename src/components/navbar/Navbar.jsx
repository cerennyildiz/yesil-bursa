import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="yb__navbar">
      <div className="yb__navbar-links">
        <div className="yb__navbar-links_logo"></div>
        <div className="yb__navbar-links_container">
          <p><a href="/">Yeşil Bursa</a></p>
          <p><a href="#content">Keşfet</a></p>
          <p><a>Etkinlikler</a></p>
          <p><a>Eko-Tur</a></p>
        </div>
      </div>
      <div className="yb__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="yb__navbar-menu_container scale-up-center">
            <div className="yb__navbar-menu_container-links">
              <p><a href="/">Anasayfa</a></p>
              <p><a href="#content">Keşfet</a></p>
              <p><a>Etkinlikler</a></p>
              <p><a>Eko-Tur</a></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
