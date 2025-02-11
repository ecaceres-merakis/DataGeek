import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "51974508797"; // Reemplaza con tu número de WhatsApp
  const message = "¡Hola! Me gustaría más información."; // Mensaje predeterminado

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Efecto de onda */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(37, 211, 102, 0.5)", // Color del efecto
          borderRadius: "50%",
          animation: "pulse-animation 2s infinite",
        }}
      ></div>

      {/* Botón */}
      <button
        onClick={handleWhatsAppClick}
        style={{
          position: "relative",
          width: "60px",
          height: "60px",
          backgroundColor: "#25D366",
          border: "none",
          borderRadius: "50%",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          zIndex: "1", // Asegura que el ícono esté sobre la onda
        }}
      >
        {/* Ícono de WhatsApp */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
          viewBox="0 0 32 32"
          width="30"
          height="30"
        >
          <path d="M16.01 0C7.18 0 0 7.16 0 15.99c0 2.82.74 5.58 2.15 8.03L0 32l8.2-2.13c2.33 1.28 4.97 1.95 7.8 1.95 8.83 0 15.99-7.16 15.99-15.99C32 7.16 24.84 0 16.01 0zm0 29.41c-2.59 0-5.1-.68-7.31-1.96l-5.18 1.34 1.38-5.05c-1.21-2.07-1.85-4.45-1.85-6.74 0-7.23 5.89-13.11 13.12-13.11 7.23 0 13.12 5.89 13.12 13.12s-5.88 13.1-13.11 13.1zm7.31-8.38c-.41-.2-2.41-1.2-2.79-1.34-.38-.14-.65-.2-.92.21-.28.41-1.06 1.34-1.3 1.62-.24.27-.48.31-.89.1-.41-.2-1.74-.64-3.31-2.03-1.22-1.09-2.04-2.42-2.28-2.83-.24-.41-.03-.64.18-.83.19-.19.41-.48.62-.72.21-.24.28-.41.41-.69.14-.27.07-.51-.03-.72-.1-.2-.91-2.17-1.25-2.98-.33-.8-.67-.69-.92-.69-.24 0-.51-.03-.78-.03-.28 0-.72.1-1.09.51-.38.41-1.43 1.4-1.43 3.41s1.46 3.95 1.67 4.23c.21.27 2.88 4.4 6.98 6.16.98.41 1.74.65 2.34.83.98.31 1.87.27 2.57.16.78-.12 2.41-.98 2.75-1.93.34-.96.34-1.79.24-1.93-.1-.14-.38-.24-.78-.44z" />
        </svg>
      </button>

      {/* Animación de onda */}
      <style>
        {`
          @keyframes pulse-animation {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            100% {
              transform: scale(2.5);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default WhatsAppButton;
