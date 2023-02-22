import React from 'react';
import ReactDOM from 'react-dom/client';

import '../assets/stylesheets/application.scss';
import App from "./components/app";

const root = ReactDOM.createRoot(document.getElementById('root'));
if (root) {
  root.render(<App />);
}
