import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Personal from './personal'; 
import Catalog from './catalog'
import Favourites from './Favourites';
import Basket from './basket';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/personal" element={<Personal />} />
            <Route path="/catalog" element = {<Catalog />} />
            <Route path="/favourites" element = {<Favourites />} />
            <Route path="/basket" element = {<Basket />} />
        </Routes>
    );
}

export default App;
