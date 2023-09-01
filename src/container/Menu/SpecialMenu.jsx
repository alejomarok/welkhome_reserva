import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { data, images } from "../../constants";
import "./SpecialMenu.css";
import "./Cards.css";


const SpecialMenu = () => (
  
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <h1 className="headtext__cormorant">Nuestra Selección</h1>
    </div>
    <div class="main">
  <ul class="cards">
    <li class="cards_item" id="item_salad">
      <div class="card">
        <div class="card_price "><button className="form_boton flex_center ov-btn-grow-skew" href="#login">RESERVAR</button></div>
        <div class="card_image"><img src="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg" alt="mixed vegetable salad in a mason jar. "/></div>
        <div class="card_content">
          <h2 class="card_title">Épico Sazón</h2>
          <div class="card_text">
            <p>Descubre una experiencia culinaria verdaderamente épica en Épico Sazón, donde la creatividad se encuentra con los ingredientes de primera calidad. En nuestro restaurante, la cocina es una forma de arte y cada plato es una obra maestra cuidadosamente elaborada. Nuestro equipo de chefs apasionados busca constantemente nuevos sabores y presentaciones sorprendentes para llevar tu paladar a un viaje inolvidable. Desde la primera impresión visual hasta el último bocado, Épico Sazón redefine tus expectativas de la alta cocina y te invita a ser parte de una experiencia culinaria sin igual.</p>
          </div>
        </div>
      </div>
    </li>

    <li class="cards_item" id="item_reuben">
      <div class="card">
        <div class="card_price "><button className="form_boton flex_center ov-btn-grow-skew" href="#">RESERVAR</button></div>
        <div class="card_image"><img src="https://assets.codepen.io/652/photo-1520174691701-bc555a3404ca.jpeg" alt="a Reuben sandwich on wax paper. "/></div>
        <div class="card_content">
          <h2 class="card_title">Delicia Urbana</h2>
          <div class="card_text">
           
            <p>Sumérgete en una experiencia culinaria única en Delicia Urbana, donde la gastronomía se encuentra con la modernidad. Nuestro restaurante combina la frescura de los ingredientes locales con técnicas innovadoras de cocina para crear platos que deleitarán tus sentidos. Desde exquisitas creaciones de autor hasta clásicos reinventados, cada bocado es una aventura en sabores que reflejan la esencia de la vida urbana. Únete a nosotros y descubre un nuevo nivel de satisfacción gastronómica en un entorno contemporáneo y acogedor. </p>
            
              
          </div>
        </div>
      </div>
    </li>
    <li class="cards_item" id="item_fig">
      <div class="card">
        <div class="card_price "><button className="form_boton flex_center ov-btn-grow-skew" href="#">RESERVAR</button></div>
        <div class="card_image"><img src="https://assets.codepen.io/652/photo-1544510808-91bcbee1df55.jpeg" alt="A side view of a plate of figs and berries. "/></div>
        <div class="card_content">
          <h2 class="card_title">Rincón Gastronómico</h2>
          <div class="card_text">
            <p>Bienvenidos a Rincón Gastronómico, donde la pasión por la comida se fusiona con la tradición. Nuestro restaurante es un refugio para los amantes de los sabores auténticos y las recetas familiares transmitidas de generación en generación. Cada plato cuenta una historia de ingredientes seleccionados con cuidado y técnicas culinarias perfeccionadas con el tiempo. Ya sea que estés buscando una experiencia nostálgica o quieras explorar los secretos de la cocina casera, en Rincón Gastronómico te invitamos a saborear el pasado y el presente en cada delicioso bocado.</p>
            
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>
  </div>
);

export default SpecialMenu;
