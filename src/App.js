import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Personal from './personal'; 
import Catalog from './catalog'
import Favourites from './Favourites';
import Basket from './basket';
import Product from './Product';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/personal" element={<Personal />} />
            <Route path="/catalog" element = {<Catalog />} />
            <Route path="/favourites" element = {<Favourites />} />
            <Route path="/basket" element = {<Basket />} />
            <Route path="/product/:id" element = {<Product />} />
        </Routes>
    );
}

export default App;
