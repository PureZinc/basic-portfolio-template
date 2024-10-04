import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/default.css';
import './css/styles.css';
import './css/responsive.css';
import './css/theme.css';

import AppRouter from './Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

