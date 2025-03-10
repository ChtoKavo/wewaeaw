import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/Используются везде/logo.png';
import icon1 from './images/Используются везде/user-icon.png';
import icon2 from './images/Используются везде/love-icon.png';
import icon3 from './images/Используются везде/store-icon.png';
import qr from './images/Используются везде/qr-code.png';
import sber from './images/basket/сбер.png';
import Tf from './images/basket/тф.png';
import Card from './images/basket/Карта.png';
import './basket.css';

const Basket = () => {
    return (
        <div className='App'>
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
            <div className="basket-container">
                <h1>Корзина</h1>
                <div className="basket-content">
                    <div className="basket-items">
                        <div className="basket-item">
                            <img src="path-to-image1" alt="Взрывные котята" />
                            <div>
                                <span>Взрывные котята</span>
                                <input type="number" defaultValue="1" min="1" />
                            </div>
                            <span>990 ₽</span>
                        </div>
                        <div className="basket-item">
                            <img src="path-to-image2" alt="Чёрная книга" />
                            <div>
                                <span>Чёрная книга</span>
                                <input type="number" defaultValue="1" min="1" />
                            </div>
                            <span>4 990 ₽</span>
                        </div>
                        <div className="basket-item">
                            <img src="path-to-image3" alt="500 злобных карт" />
                            <div>
                                <span>500 злобных карт</span>
                                <input type="number" defaultValue="1" min="1" />
                            </div>
                            <span>1 990 ₽</span>
                        </div>
                        <div className="basket-item">
                            <img src="path-to-image4" alt="Descent: Сказания" />
                            <div>
                                <span>Descent: Сказания</span>
                                <input type="number" defaultValue="1" min="1" />
                            </div>
                            <span>19 990 ₽</span>
                        </div>
                    </div>
                    <div className="payment-section">
            <div className="delivery-info">
                <h2 className='h2aboba'>Адрес доставки</h2>
                <p>Ул.Пушкина п.2 д.Колотушкина 5</p>
                <p>Индекс: 416666</p>
                <p>Способ доставки: Курьер</p>
            </div>
            <div className="recipient-info">
                <h2 className='h2aboba'>Данные получателя</h2>
                <p>Ф.И.О: Лещенков Роман Юрьевич</p>
                <p>Номер телефона: +7 ХХХ ХХХ ХХ ХХ</p>
                <p>Почта: Ivanov@gmail.com</p>
            </div>
            <div className="payment-methods">
                <h2 className='h2aboba'>Выберите способ оплаты</h2>
                <div className="payment-buttons">
                    <button> <img src={sber} alt='' /> </button>
                    <button><img src={Tf} alt='' /></button>
                    <button><img src={Card} alt='' /></button>
                </div>
            </div>
            <div className="total">
                <p>Доставка: 300 ₽</p>
                <p>Итог: 28 260 ₽</p>
                <button className="pay-button">Оплатить</button>
            </div>
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
};

export default Basket;