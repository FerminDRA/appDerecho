import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SearchBar from "./components/searchBar";
import Footer from "./components/footer";
import logo from "./images/logo.png"
import Tramites from "./components/tramites"
import Transparencia from "./components/transparencia"
import Inicio from "./components/inicio"
import Ayuntamiento from "./components/ayuntamiento"
import Identidad from "./components/identidad"
import Education from "./components/educacion"
import Energia from "./components/energia"
import Impuesto from "./components/impuesto"
import Salud from "./components/salud"
import Trabajo from "./components/trabajo"

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-primary" id="container">
          <img className='logoIni' src={logo} alt='logo'/>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Inicio
              </Link>
            </li>
            <li className="nav-item searchBarContainer">
              <SearchBar></SearchBar>
            </li>
            <li className="nav-item componentes">
              <Link to="/transparencia" className="nav-link">
                Transparencia
              </Link>
            </li>
            <li className="nav-item componentes">
              <Link to="/ayuntamiento" className="nav-link">
                Ayuntamiento
              </Link>
            </li>
            <li className="nav-item componentes">
              <Link to="/tramites" className="nav-link">
                Tramites y servicios
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          
          <Routes>
          <Route exact path="/" element={<Inicio />} />
            <Route exact path="/tramites" element={<Tramites />} />
            <Route exact path="/transparencia" element={<Transparencia />} />
            <Route exact path="/ayuntamiento" element={<Ayuntamiento />} />
            <Route exact path="/tramites/identidad" element={<Identidad />} />
            <Route exact path="/tramites/educacion" element={<Education />} />
            <Route exact path="/tramites/energia" element={<Energia />} />
            <Route exact path="/tramites/impuestos" element={<Impuesto />} />
            <Route exact path="/tramites/salud" element={<Salud />} />
            <Route exact path="/tramites/trabajo" element={<Trabajo />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
