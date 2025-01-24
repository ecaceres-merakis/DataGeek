import { useState } from "react";
import ContactMenu from "./ContactMenu"; // Importar el menú lateral
import logo from "./imgs/Logo_Unico.PNG";

export const Navigation = (props) => {
  const [isContactMenuOpen, setIsContactMenuOpen] = useState(false);

  const toggleContactMenu = () => {
    setIsContactMenuOpen(!isContactMenuOpen); // Alternar entre abierto/cerrado
  };
  return (
    <>
      {/* Barra blanca superpuesta */}
      <div className="barra-blanca"
        style={{
          position: "fixed", // Fija la barra blanca
          zIndex: 1050, // Asegura que esté frente al menú
        }}
      >
        <a href="#page-top">
        <img
              src={logo}
              alt="DataGeek Logo"
              style={{
                height: "70px",
                width: "auto",
                marginTop: "15px", // Subir la imagen
                marginLeft: "30px", // Mover la imagen a la derecha
              }}
            />
        </a>
      </div>

    <nav id='menu' className='navbar navbar-default navbar-fixed-top'
      style={{
        zIndex: 1000, // Asegura que esté detrás de la barra blanca
      }}
    >
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll'>
          
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#services' className='page-scroll'>
                Servicios
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Galería
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                Sobre Nosotros
              </a>
            </li>
            {/*
            <li>
              <a href='#features' className='page-scroll'>
                Features
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li>
            */}
            <li>
                <a
                  href="#contact"
                  className="page-scroll"
                  onClick={(e) => {
                    e.preventDefault(); // Evita el scroll automático
                    toggleContactMenu();
                    //document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
                  }}
                >
                Contacto
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
    <ContactMenu
        isOpen={isContactMenuOpen}
        closeMenu={toggleContactMenu}
      />
    </>
  );
};

export default Navigation;
