// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import component App gốc

// Import các file CSS cần thiết
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'; // Tailwind CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);