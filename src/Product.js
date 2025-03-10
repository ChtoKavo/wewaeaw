import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/Используются везде/logo.png';
import icon1 from './images/Используются везде/user-icon.png';
import icon2 from './images/Используются везде/love-icon.png';
import icon3 from './images/Используются везде/store-icon.png';
import qr from './images/Используются везде/qr-code.png';
import Bunker from './images/Карта товара/Бункер.png';
import Book from './images/Карта товара/book.png';
import People from './images/Карта товара/people.png';
import Type from './images/Карта товара/type.png';
import Ava1 from './images/Карта товара/Ava1.png';
import Ava2 from './images/Карта товара/Ava2.png';
import Ava3 from './images/Карта товара/Ava3.png';
import './Product.css';

function Product() {
    // Функция для отображения звездочек
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className={`star ${i <= rating ? 'filled' : ''}`}>
                    {i <= rating ? '★' : '☆'}
                </span>
            );
        }
        return <div className="star-rating">{stars}</div>;
    };

    return (
        <div>
            <header className="header">
                <img src={logo} alt="Логотип" className="logo" />
                <input className="search-input" placeholder='Название товара' type='text' />
                <div className="button-container">
                    <Link to="/personal" className="icon-button">
                        <img alt='user' src={icon1} />
                    </Link>
                    <Link to="/favourites" className="icon-button">
                        <img alt='love' src={icon2} />
                    </Link>
                    <Link to="/basket" className="icon-button">
                        <img alt='store' src={icon3} />
                    </Link>
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
            
            <div className="container">
                <h1>Бункер</h1>
                <div className="product-details">
                    <div className="product-info">
                        <img src={Bunker} alt='' className="product-image" />
                        <div className="product-details-column">
                            <div className="age-category">18+</div>
                            <div className="game-type">
                                <img src={Book} alt='' className="icon" /> Вечериночные
                            </div>
                            <div className="game-details">
                                <img src={People} alt='' className="icon" /> 4 · 16
                            </div>
                            <div className="game-details">
                                <img src={Type} alt='' className="icon" /> 30 · 60
                            </div>
                            <div className="price">2 990P</div>
                            <button className="add-to-cart">Добавить в корзину</button>
                        </div>
                    </div>
                </div>
                <div className="description">
                    Описание<br />
                    В настольной игре "Бункер" вы получаете случайный набор карт, который определяет ваш пол, возраст, просветление и другие черты. Ваша задача - убедить остальных, что этот набор характеризуется более весьма полезен. Как это сделать? Попробуйте и узнаете, а заодно и просыхаете новые ораторского мастерства! Эта игра подходит для интересного времяпрепровождения в большом кругу друзей на вечеринке, ведь она предусматривает возможность участия до 18 человек одновременно без инструкции приложения к ИГРЕ.
                </div>
                <div className="reviews">
                    <h2>Отзывы</h2>
                    <div className="write-review">
                        <textarea placeholder="Написать отзыв"></textarea>
                        <button>Оставить отзыв</button>
                    </div>
                    <div className="review">
                        <div className="review-author-container">
                            <img src={Ava1} alt='' className="review-avatar" />
                            <span className="review-author">Григорий Петротенко</span>
                        </div>
                        <div className="review-date">01.01.25 14:35</div>
                        {renderStars(4)} {/* Добавьте рейтинг */}
                        <div className="review-text">Каждая партия уникальна! Играет роль не только стратегия, но и взаимодействие с другими игроками</div>
                    </div>

                    <div className="review">
                        <div className="review-author-container">
                            <img src={Ava2} alt='' className="review-avatar" />
                            <span className="review-author">Алина Рафиловна</span>
                        </div>
                        <div className="review-date">01.01.25 14:35</div>
                        {renderStars(3)} {/* Добавьте рейтинг */}
                        <div className="review-text">Хотелось большего от игры. Механика кажется однообразной, а некоторые решения не имеют значительного влияния на исход. Не удалось погрузиться в атмосферу, как ожидала.</div>
                    </div>

                    <div className="review">
                        <div className="review-author-container">
                            <img src={Ava3} alt='' className="review-avatar" />
                            <span className="review-author">Игорь Муслимов</span>
                        </div>
                        <div className="review-date">01.01.25 14:35</div>
                        {renderStars(5)} {/* Добавьте рейтинг */}
                        <div className="review-text">Классная механика и неожиданные повороты сюжета. Идеально подходит для вечеров с друзьями!</div>
                    </div>
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

export default Product;
