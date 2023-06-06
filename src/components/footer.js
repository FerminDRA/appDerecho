import React from 'react';
import wsLogo from "../images/wsLogo.png"
import logo from "../images/logo.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className='logo'>
            <img className='logoEm' src={logo} alt='logo'/>
        </div>
        <div className='aviso'>
            <p>Aviso de privacidad</p>
            <p>Aviso de privacidad Todos los derechos reservados 2023 H. Ayuntamiento de Orizaba, Ver.</p>
        </div>
        <div className='wsapp'>
            <img className='logoWs' src={wsLogo} alt='logo'/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
