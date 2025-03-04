import React from 'react';
import './ProductCard.css'; // Стили для карточки товара

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price} ₽</p>
        </div>
    );
};

export default ProductCard;