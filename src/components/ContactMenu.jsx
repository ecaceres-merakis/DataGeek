import React from "react";
import "./styles/ContactMenu.css";
import data from "../data/data.json"; 

const ContactMenu = ({ isOpen, closeMenu}) => {
    const contactData = data.Contact;
    return (
        <div className={`contact-menu ${isOpen ? "open" : ""}`}>
            <div className="contact-menu-content">
                <div className={`close-icon ${isOpen ? "visible" : ""}`} onClick={closeMenu}>
                    ✖
                </div>
                <h2>Contacto</h2>
                <div className="contact-item">
                    <span>
                        <i className="fa fa-envelope-o"></i>
                    </span>
                    <p>{contactData.email || "Cargando..."}</p>
                </div>{/*Necesito ahora para el contacto de numero de Whastapp*/}
                <div className="contact-item">
                    <span>
                        <i className="fa fa-whatsapp"></i>
                    </span>
                    <p>{contactData.phone || "Cargando..."}</p>
                </div>

                {/*<button className="close-button" onClick={closeMenu}>
                Cerrar
                </button>*/}
            </div>
        </div>
    );
};

export default ContactMenu;
