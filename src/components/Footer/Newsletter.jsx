import React from "react";

import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  

  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Reserva</h1>
      <p className="p__opensans">Ingrese los datos para realizar la reserva.</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="name" placeholder="Ingrese su nombre y apellido" />
    </div>
    <div className="app__newsletter-input flex__center">
       <input type="email" placeholder="Ingrese su mail" />   
    </div> 
    <div className="app__newsletter-input flex__center">
       <input type="phone" placeholder="Ingrese su Telefono" />   
    </div> 

    <div>
      <div className="FechayHora" >
        <div className="FechayHora_items">
          <h4 className= 'Texto_FechayHora' >Fecha</h4>
           <input className="FechayHora_item" type="date" id="start" name="trip-start" min="2023-01-01" max="2026-12-31" />
        </div>
        <div  className="FechayHora_items">
        <h4  className= 'Texto_FechayHora' >Hora</h4>
          <input className="FechayHora_item" type="time" name="eta"/> 
        </div>
        <div  className="FechayHora_items">
        <h4  className= 'Texto_FechayHora'  >Comensales</h4>
          <input className="FechayHora_item" type="number" id="tentacles" name="tentacles" min="1" max="100" />
        </div>
      </div>
      <div className="form_boton_div" >
        <button className="form_boton flex_center ov-btn-grow-skew" href="#" > 
          RESERVAR
        </button>
      </div>
</div>
       
  </div>
 
   
);

export default Newsletter;
