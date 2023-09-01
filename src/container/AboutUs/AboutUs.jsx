import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Sobre nosotros</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
        Bienvenidos a Welkhome, tu destino en línea para reservar mesas en los mejores restaurantes de la ciudad. Explora y reserva de manera conveniente experiencias culinarias excepcionales desde tu hogar.
        </p>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Nuestra Historia</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
        La historia de Welkhome nace de la pasión por la buena comida y momentos memorables. Surgimos para simplificar la búsqueda y reserva de restaurantes excepcionales, transformando la manera en que disfrutas de experiencias culinarias. Únete a nuestra emocionante aventura culinaria.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
