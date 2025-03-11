import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/Используются везде/logo.png';
import icon1 from './images/Используются везде/user-icon.png';
import icon2 from './images/Используются везде/love-icon.png';
import icon3 from './images/Используются везде/store-icon.png';
import qr from './images/Используются везде/qr-code.png';
import sber from './images/basket/сбер.png';
import Tf from './images/basket/тф.png';
import Card from './images/basket/Карта.png';
import Cats from './images/basket/котята.png';
import fiven from './images/basket/500 злобных карт.png';
import blackBook from './images/basket/Черная книга.png';
import Descent from './images/basket/descent.png';
import Delete from './images/basket/delete.png';
import Love from './images/basket/Love.png';
import './basket.css';

const imageMap = {
    1: Cats,
    2: blackBook,
    3: fiven,
    4: Descent,
};

const Basket = () => {
    const [items, setItems] = useState([
        { id: 1, name: 'Взрывные котята', price: 990, quantity: 1 },
        { id: 2, name: 'Чёрная книга', price: 4990, quantity: 1 },
        { id: 3, name: '500 злобных карт', price: 1990, quantity: 1 },
        { id: 4, name: 'Descent: Сказания', price: 19990, quantity: 1 },
    ]);

    const [address, setAddress] = useState('Ул.Пушкина п.2 д.Колотушкина 5');
    const [postalCode, setPostalCode] = useState('416666');
    const [deliveryMethod, setDeliveryMethod] = useState('Курьер');
    const [recipientName, setRecipientName] = useState('Лещенков Роман Юрьевич');
    const [phoneNumber, setPhoneNumber] = useState('+7 ХХХ ХХХ ХХ ХХ');
    const [email, setEmail] = useState('Ivanov@gmail.com');

    const handleQuantityChange = (id, quantity) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    };

    const handleRemoveItem = (id) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const calculateTotal = () => {
        const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const deliveryFee = 300; 
        return subtotal + deliveryFee;
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
                        {items.map(item => (
                            <div className="basket-item" key={item.id}>
                                <img src={imageMap[item.id]} alt={item.name} />
                                <div className="item-details">
                                    <div className="item-info">
                                        <span className="item-name">{item.name}</span>
                                        <span className="item-price">{item.price * item.quantity} ₽</span>
                                    </div>
                                    <div className="item-quantity">
                                        <label htmlFor={`quantity-${item.id}`} className="visually-hidden">Количество</label>
                                        <input
                                            id={`quantity-${item.id}`}
                                            type="number"
                                            value={item.quantity}
                                            min="1"
                                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                        />
                                        <div className="item-actions">
                                            <button onClick={() => handleRemoveItem(item.id)} aria-label="Удалить">
                                                <img src={Delete} alt="Удалить" />
                                            </button>
                                            <button aria-label="Добавить в избранное">
                                                <img src={Love} alt="Добавить в избранное" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="payment-section">
                        <div className="delivery-info">
                            <h2 className='h2aboba'>Адрес доставки</h2>
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Введите адрес"
                                className="address-input"
                            />
                            <input
                                type="text"
                                value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)}
                                placeholder="Индекс"
                                className="postal-code-input"
                            />
                            <select
                                value={deliveryMethod}
                                onChange={(e) => setDeliveryMethod(e.target.value)}
                                className="delivery-method-input"
                            >
                                <option value="Курьер">Курьер</option>
                                <option value="Почта">Почта</option>
                                <option value="Самовывоз">Самовывоз</option>
                            </select>
                        </div>
                        <div className="recipient-info">
                            <h2 className='h2aboba'>Данные получателя</h2>
                            <input
                                type="text"
                                value={recipientName}
                                onChange={(e) => setRecipientName(e.target.value)}
                                placeholder="Ф.И.О"
                                className="recipient-name-input"
                            />
                            <input
                                type="text"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                placeholder="Номер телефона"
                                className="phone-input"
                            />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Почта"
                                className="email-input"
                            />
                        </div>
                        <div className="payment-methods">
                            <h2 className='h2aboba'>Выберите способ оплаты</h2>
                            <div className="payment-buttons">
                                <button> <img src={sber} alt='Сбер' /> </button>
                                <button><img src={Tf} alt='Тинькофф' /></button>
                                <button><img src={Card} alt='Карта' /></button>
                            </div>
                        </div>
                        <div className="total">
                            <p>Доставка: 300 ₽</p>
                            <p>Итог: {calculateTotal()} ₽</p>
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

