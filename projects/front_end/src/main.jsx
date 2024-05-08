import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';

import { AuthProvider } from './utils/AuthContext'; 
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider> {/* Wrap the entire application with AuthProvider */}
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
