import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Personal from './personal'; 
import Catalog from './catalog'
import Favourites from './Favourites';
import Basket from './basket';
import Product from './Product';
import Reg from './reg';
import Log from './vhod'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/personal" element={<Personal />} />
            <Route path="/catalog" element = {<Catalog />} />
            <Route path="/favourites" element = {<Favourites />} />
            <Route path="/basket" element = {<Basket />} />
            <Route path="/reg" element = {<Reg />} />
            <Route path="/login" element = {<Log />} />
            <Route path="/product/:id" element = {<Product />} />
        </Routes>
    );
}
//aaaa
export default App;
