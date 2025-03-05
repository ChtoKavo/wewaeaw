import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/Используются везде/logo.png';
import icon1 from './images/Используются везде/user-icon.png';
import icon2 from './images/Используются везде/love-icon.png';
import icon3 from './images/Используются везде/store-icon.png';
import basket from './images/Используются везде/basket.png';
import qr from './images/Используются везде/qr-code.png';
import './catalog.css';

function Catalog() {
    const [visibleCategories, setVisibleCategories] = useState({
        popularGames: false,
        genres: false,
        ageCategories: false,
        playerCount: false,
        playTime: false,
        discounts: false,
    });

    const toggleCategory = (category) => {
        setVisibleCategories((prev) => ({
            ...prev,
            [category]: !prev[category],
        }));
    };

    return (
        <div className='App'>
            <header className="header">
                <img src={logo} alt="Логотип" className="logo" />
                <input className="search-input" placeholder='Название товара' type='text' />
                <div className="button-container">
                    <Link to="/personal" className="icon-button">
                        <img alt='user' src={icon1} />
                    </Link>
                    <button className="icon-button"><img alt='love' src={icon2} /></button>
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
                    <li><a href="#sales">Хиты продаж</a></li>
                </ul>
            </nav>
            <div className="new-catalog-container">
                <aside className="new-catalog-sidebar">
                    <h2>Каталог</h2>
                    <ul>
                        <li onClick={() => toggleCategory('popularGames')} style={{ cursor: 'pointer' }}>
                            Популярные игры
                        </li>
                        {visibleCategories.popularGames && (
                            <ul>
                                <li><a href="#popular1">Топ 10 настольных игр </a></li>
                                <li><a href="#popular2">Новинки месяца</a></li>
                                <li><a href="#popular3">Игры с высоким рейтингом</a></li>
                            </ul>
                        )}
                        <li onClick={() => toggleCategory('genres')} style={{ cursor: 'pointer' }}>
                            Жанры игр
                        </li>
                        {visibleCategories.genres && (
                            <ul>
                                <li><a href="#genre1">Стратегические игры</a></li>
                                <li><a href="#genre2">Карточные игры</a></li>
                                <li><a href="#genre3">Семейные игры</a></li>
                                <li><a href="#genre4">Ролевые игры</a></li>
                                <li><a href="#genre5">Партии и вечеринки</a></li>
                                <li><a href="#genre6">Кооперативные игры</a></li>
                            </ul>
                        )}
                        <li onClick={() => toggleCategory('ageCategories')} style={{ cursor: 'pointer' }}>
                            Возрастные категории
                        </li>
                        {visibleCategories.ageCategories && (
                            <ul>
                                <li><a href="#age1">3 - 5 лет</a></li>
                                <li><a href="#age2">6 - 7 лет</a></li>
                                <li><a href="#age3">8 - 12 лет</a></li>
                                <li><a href="#age4">13 - 17 лет</a></li>
                                <li><a href="#age5">Более 18 лет</a></li>
                            </ul>
                        )}
                        <li onClick={() => toggleCategory('playerCount')} style={{ cursor: 'pointer' }}>
                            Количество игроков
                        </li>
                        {visibleCategories.playerCount && (
                            <ul>
                                <li><a href="#count1">Игры на 1-2 игрока</a></li>
                                <li><a href="#count2">Игры на 3-6 игроков</a></li>
                                <li><a href="#count3">Игры на большие компании (6+ игроков)</a></li>
                            </ul>
                        )}
                        <li onClick={() => toggleCategory('playTime')} style={{ cursor: 'pointer' }}>
                            Время игры
                        </li>
                        {visibleCategories.playTime && (
                            <ul>
                                <li><a href="#time1">Быстрые игры (до 30 минут)</a></li>
                                <li><a href="#time2">Средние игры (от 30 до 60 минут)</a></li>
                                <li><a href="#time3">Долгие игры (более 60 минут)</a></li>
                            </ul>
                        )}
                         <li onClick={() => toggleCategory('discounts')} style={{ cursor: 'pointer' }}>
                            Скидки и распродажи
                        </li>
                        {visibleCategories.discounts && (
                            <ul>
                                <li><a href="#discount1">Скидки на игры</a></li>
                                <li><a href="#discount2">Специальное предложение</a></li>
                            </ul>
                        )}
                    </ul>
                </aside>
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

export default Catalog;

