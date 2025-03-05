import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Personal from './personal'; 
import Catalog from './catalog'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/personal" element={<Personal />} />
            <Route path="/catalog" element = {<Catalog />} />
        </Routes>
    );
}

export default App;
