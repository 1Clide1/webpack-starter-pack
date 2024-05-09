// imports
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/main.scss';

// creating the root
const container = document.getElementById('root');
// get element by id can sometimes be null so this is a check
if (container) {
  const root = createRoot(container);

  // rendering out the root
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  console.error('Element with ID "root" not found.');
}
