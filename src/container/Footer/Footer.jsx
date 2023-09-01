import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
 import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contacto</h1>
        <p className="p__opensans">Alejo Marcó</p>
        <p className="p__opensans">+54 3571662505</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">
          &quot;La Mejor Manera De Encontrarse A Uno Mismo Es Perderse Al Servicio De Los Demás.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
      
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Redes Sociales</h1> 
         <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>

      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">Powered by Alejo Marcó.</p>
    </div>
  </div>
);

export default Footer;
