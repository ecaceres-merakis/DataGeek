import React from 'react';
import ReactDOM from 'react-dom/client'; // Usar createRoot de React 18
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Seleccionar el elemento raíz
const rootElement = document.getElementById('root');

// Crear la raíz usando createRoot
const root = ReactDOM.createRoot(rootElement);

// Renderizar el componente principal
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Configuración del service worker (opcional)
serviceWorker.unregister();
