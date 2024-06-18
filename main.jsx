import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App';

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(

  <App/>
)
