import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Personal from './personal'; // Убедитесь, что этот путь правильный

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} /> {/* Это корневой маршрут */}
            <Route path="/personal" element={<Personal />} />
        </Routes>
    );
}

export default App;
