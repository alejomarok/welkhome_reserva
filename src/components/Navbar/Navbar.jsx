import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans" >
          <a href="#home" className="p_opensans2" style={{ textDecoration: 'none', color: 'white' }} >Inicio</a>
        </li>
        <li className="p__opensans">
          <a href="#about"  style={{ textDecoration: 'none', color: 'white' }} >Informacion</a>
        </li>
        <li className="p__opensans">
          <a href="#menu"  style={{ textDecoration: 'none', color: 'white' }} >Restaurantes</a>
        </li>

        <li className="p__opensans">
          <a href="#contact"  style={{ textDecoration: 'none', color: 'white' }} >Contacto</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log In / Reserva
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#home" onClick={() => setToggleMenu(false)} style={{ textDecoration: 'none', color: 'white' }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)} style={{ textDecoration: 'none', color: 'white' }}>
                  About
                </a>
              </li>
              <li>
                <a href="#menu" onClick={() => setToggleMenu(false)} style={{ textDecoration: 'none', color: 'white' }}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)} style={{ textDecoration: 'none', color: 'white' }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
