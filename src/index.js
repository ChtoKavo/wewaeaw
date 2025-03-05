import React from 'react';
import ReactDOM from 'react-dom/client'; // Обратите внимание на изменение импорта
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root')); // Используйте createRoot
root.render(
    <Router>
        <App />
    </Router>
);
