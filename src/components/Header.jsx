import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <>
      {/* <header className="container-fluid bg-primary d-flex justify-content-center">
        <p className="text-light mb-0 p-2 fs-6">Contactanos - 55 5519 1987</p>
      </header> */}

      <nav className="navbar navbar-expand-lg navbar-light p-3 sticky-top p-3 mb-2 bg-primary text-white" id="menu">
        <div className="container ">
          <a className="navbar-brand " href="#">
            <span className="fs-5 text-primary fw-bold text-white">Auto Climas Peter</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#equipo">
                  Equipo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#seccion-contacto">
                  Contactos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
