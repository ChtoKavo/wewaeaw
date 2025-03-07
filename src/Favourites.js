import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/Используются везде/logo.png';
import icon1 from './images/Используются везде/user-icon.png';
import icon2 from './images/Используются везде/love-icon.png';
import icon3 from './images/Используются везде/store-icon.png';
import basket from './images/Используются везде/basket.png';
import qr from './images/Используются везде/qr-code.png';
import Reklama from './images/favourites/Реклама.png';
import './favourites.css'

function Favourites() {
    const products = [
        { name: "Домов: Бейта из Артюхис", price: "14 900P" },
        { name: "Ужас: Артюхоль. Карточная игра", price: "2 900P" },
        { name: "Озёрность: Верхняя снятия.", price: "19 900P" },
        { name: "Подпечатал и вбежит", price: "900P" },
        { name: "Черная книга", price: "4 950P" },
        { name: "500 300 альбомов карт", price: "1 950P" },
        { name: "Беременная пехота", price: "990P" },
        { name: "Зомбишка: Голи Майкл", price: "14 990P" },
        { name: "Песень: Сказания танца", price: "19 950P" },
        { name: "Мещь: Club", price: "2 990P" },
        { name: "Энергия", price: "7 980P" },
        { name: "Взрослые пехота", price: "990P" }
    ];

    return (
        <div className="App">
            <header className="header">
                <img src={logo} alt="Логотип" className="logo" />
                <input style={{ width: '500px' }} placeholder='Название товара' type='text' />
                <div className="button-container">
                    <Link to="/personal" className="icon-button">
                        <img alt='user' src={icon1} />
                    </Link>
                    <Link to="/favourites" className=''>
                        <button className="icon-button"><img alt='love' src={icon2} /></button>
                    </Link>
                    <button className="icon-button"><img alt='store' src={icon3} /></button>
                </div>
            </header>
            <nav className="nav">
                <ul>
                    <li><a href="#veterinary">Ветеринарные</a></li>
                    <li><a href="#adults">Для взрослых</a></li>
                    <li><a href="#family">Для всей семьи</a></li>
                    <li><a href="#children">Для детей</a></li>
                    <li><a href="#classic">Классические</a></li>
                    <li><a href="#plans">Планы</a></li>
                    <li><a href="#strategic">Стратегические</a></li>
                    <li><a href="#sales">Хаты продаж</a></li>
                </ul>
            </nav>
            <div className="content">
                <main className="new-product-grid">
                                    {Array.from({ length: 12 }).map((_, index) => (
                                        <div key={index} className="new-product-card">
                                            <img src={`https://avatars.mds.yandex.net/i?id=872dc79fb43f6d5d72c2024dff7bf222-5910939-images-thumbs&n=13`} alt={`Товар ${index + 1}`} />
                                            <div className="new-product-content">
                                                <h3>Товар {index + 1}</h3>
                                                <p>Описание товара {index + 1}</p>
                                            </div>
                                            <button className="new-basket-button">
                                                <img src={basket} alt="Корзина" />
                                            </button>
                                        </div>
                                    ))}
                                </main>
                <div className="advertisement">
                    <img src={Reklama} alt=''/>
                </div>
            </div>

            <footer className="footer">
                            <div className="footer-logo">
                                <img src={logo} alt="logofooter" />
                            </div>
                            <div className="footer-content">
                                <div className="footer-section">
                                    <h4>Страницы</h4>
                                    <ul>
                                        <li><a href="#">Главная</a></li>
                                        <li><a href="#">Каталог</a></li>
                                        <li><a href="#">Корзина</a></li>
                                        <li><a href="#">Избранное</a></li>
                                        <li><a href="#">Профиль</a></li>
                                        <li><a href="#">Доставка</a></li>
                                        <li><a href="#">Покупки</a></li>
                                    </ul>
                                </div>
                                <div className="footer-section">
                                    <h4>Услуги</h4>
                                    <ul>
                                        <li><a href="#">Доставка</a></li>
                                        <li><a href="#">Служба поддержки</a></li>
                                    </ul>
                                </div>
                                <div className="footer-section">
                                    <h4>Документация</h4>
                                    <ul>
                                        <li><a href="#">Условия доставки</a></li>
                                        <li><a href="#">Условия хранения</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-qr">
                                <div className="qr-code">
                                <img src={qr} alt="QR Code" />
                                </div>
                            </div>
                        </footer>
        </div>
    );
}

export default Favourites;