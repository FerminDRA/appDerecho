import React from 'react';
import '../styles/tramites.css';
import corazonImage from '../images/corazon.jpg';
import energiaImage from '../images/energia.png';
import maletaImage from '../images/maleta.png';
import pasaporteImage from '../images/pasaporte.png';
import reciboImage from '../images/recibo.png';
import sombreroImage from '../images/sombrero.png';
import {useNavigate } from "react-router-dom";


function Tramites() {

  const navigate = useNavigate();

  const handleIrClick = (ruta) => {
    navigate(ruta);
  };

  return (
    <div className="App">
      
      <div className="containerTramites">
        <div className="box">
          <img src={pasaporteImage} alt="Imagen 1" className="box-image"/>
          <h2>Identidad, pasaporte y migración</h2>
          
          <ul className="box-list">
          
            <li>Acta de nacimiento</li>
            <li>CURP</li>
            <button className="ver-button" onClick={() => handleIrClick("/tramites/identidad")}>Ir</button>
            <li>Cartilla militar</li>
            <li>Pasaporte</li>
            
          </ul>
         
        </div>
        <div className="box">
          <img src={sombreroImage} alt="Imagen 2" className="box-image" />
          <h2>Educacion</h2>
          
          <ul className="box-list">
            <li>Cedula profesional</li>
            <li>Becas</li>
            <button className="ver-button" onClick={() => handleIrClick("/tramites/educacion")}>Ir</button>
            <li>Registro UNADM</li>
            

          </ul>
        </div>
        
      </div>

      <div className="containerTramites">
        <div className="box">
          <img src={energiaImage} alt="Imagen 4" className="box-image" />
          <h2>Energia</h2>
          <ul className="box-list">
            <li>Recibo</li>
            <li>Solicitud de recibo</li>
            <button className="ver-button" onClick={() => handleIrClick("/tramites/energia")}>Ir</button>
            <li>Fallas en el servicio</li>
          </ul>
        </div>
        <div className="box">
          <img src={maletaImage} alt="Imagen 5" className="box-image" />
          <h2>Trabajo</h2>
          <ul className="box-list">
            <li>Consulta NSS</li>
            <li>Buscar empleo</li>
            <button className="ver-button" onClick={() => handleIrClick("/tramites/trabajo")}>Ir</button>
            <li>Semanas cotizadas</li>
          </ul>
        </div>
        
      </div>
      <div className="containerTramites contFinal">
        <div className="box">
          <img src={reciboImage} alt="Imagen 4" className="box-image" />
          <h2>Impuestos y Contribuciones</h2>
          <ul className="box-list">
            <li>E-firma</li>
            <li>Inscripciones al RFC</li>
            <button className="ver-button" onClick={() => handleIrClick("/tramites/impuestos")}>Ir</button>
            <li>Factura electronica</li>
          </ul>
        </div>
        <div className="box">
          <img src={corazonImage} alt="Imagen 5" className="box-image" />
          <h2>Salud</h2>
          <ul className="box-list">
            <li>Atencion medica</li>
            <li>Consultar datos</li>
            <button className="ver-button" onClick={() => handleIrClick("/tramites/salud")}>Ir</button>
            <li>Consultar avisos medicos</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}

export default Tramites;