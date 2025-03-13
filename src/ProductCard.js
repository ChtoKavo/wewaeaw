import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <h3>{product.ItemName}</h3>
            <p>Цена: {product.Price} руб.</p>
        </div>
    );
};

export default ProductCard;