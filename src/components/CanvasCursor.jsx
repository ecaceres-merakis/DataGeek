'use client';
import useCanvasCursor from '../hooks/useCanvasCursor';

const CanvasCursor = () => {
  useCanvasCursor();
  return (
    <canvas
      id="canvas"
      style={{
        position: 'fixed', // Fijo en la pantalla
        top: 0,
        left: 0,
        width: '100vw', // Asegúrate de cubrir toda la ventana
        height: '100vh',
        pointerEvents: 'none', // No afecta la interacción con otros elementos
        zIndex: 100, // Detrás del contenido del header
      }}
    />
  );
};

export default CanvasCursor;