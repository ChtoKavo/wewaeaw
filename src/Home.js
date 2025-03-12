import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Изменено на useNavigate
import Slider from 'react-slick';
import ProductCard from './ProductCard';
import logo from './images/Используются везде/logo.png';
import icon1 from './images/Используются везде/user-icon.png';
import icon2 from './images/Используются везде/love-icon.png';
import icon3 from './images/Используются везде/store-icon.png';
import slide1 from './images/main/Слайдер.png';
import slide2 from './images/main/slide2.webp';
import slide3 from './images/main/slide3.webp';
import About from './images/main/About.png';
import Sistema from './images/main/Система накопительных скидок.png';
import BigAssortiment from './images/main/Большой ассортимент.png';
import Good from './images/main/Хорошее качество.png';
import Bonus from './images/main/Система бонусов.png';
import qr from './images/Используются везде/qr-code.png';
import './App.css';
import arrow from './images/Используются везде/Arrow.png';
import './Footer.css';

function Home() {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // состояние для аутентификации
    const navigate = useNavigate(); // заменено на useNavigate

    const handleNavigation = (e) => {
        // Проверяем, является ли целевой элемент полем поиска
        if (e.target.tagName !== 'INPUT') {
            if (!isAuthenticated) {
                e.preventDefault(); // предотвращаем стандартное поведение ссылки
                navigate('/login'); // перенаправляем на страницу входа
            }
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
    };

    const products = [
        { id: 1, name: 'Товар 1', price: 1000, image: 'https://via.placeholder.com/200' },
        { id: 2, name: 'Товар 2', price: 1500, image: 'https://via.placeholder.com/200' },
        { id: 3, name: 'Товар 3', price: 2000, image: 'https://via.placeholder.com/200' },
        { id: 4, name: 'Товар 4', price: 2500, image: 'https://via.placeholder.com/200' },
        { id: 5, name: 'Товар 5', price: 3000, image: 'https://via.placeholder.com/200' },
        { id: 6, name: 'Товар 6', price: 3500, image: 'https://via.placeholder.com/200' },
    ];

    return (
        <div className="App" onClick={handleNavigation}>
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
                    <Link to='/basket' className=''>
                        <button className="icon-button"><img alt='store' src={icon3} /></button>
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
            <section className="discount">
                <div className="slider-container">
                    <Slider {...settings}>
                        <div>
                            <img src={slide1} alt='Слайд 1' className="slider-image" />
                        </div>
                        <div>
                            <img src={slide2} alt='Слайд 2' className="slider-image" />
                        </div>
                        <div>
                            <img src={slide3} alt='Слайд 3' className="slider-image" />
                        </div>
                    </Slider>
                </div>
            </section>
            <div className='new-products'>
                <div className="new-products-header">
                    <h1 className='h1-new'> Новинки </h1>
                    <div className="more-link-container">
                        <Link to="/catalog" className="more-link">Еще</Link>
                        <img src={arrow} alt='Стрелка' className="arrow-icon" />
                    </div>
                </div>
                <div className="product-grid">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
            <div className='new-products'>
                <div className="new-products-header">
                    <h1 className='h1-new'> Новинки </h1>
                    <div className="more-link-container">
                        <Link to="/catalog" className="more-link">Еще</Link>
                        <img src={arrow} alt='Стрелка' className="arrow-icon" />
                    </div>
                </div>
                <div className="product-grid">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
            <div className='new-products'>
                <div className="new-products-header">
                    <h1 className='h1-new'> Новинки </h1>
                    <div className="more-link-container">
                        <Link to="/novelties" className="more-link">Еще</Link>
                        <img src={arrow} alt='Стрелка' className="arrow-icon" />
                    </div>
                </div>
                <div className="product-grid">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

            <div className="about-section">
                <h1>О нас</h1>
                <hr />
                <div className="about-content">
                    <img src={About} alt="О нас" className="about-image" />
                    <p>
                        Добро пожаловать в наш интернет-магазин настольных игр! Мы — команда увлеченных энтузиастов, которые верят в объединяющую силу настольных игр. В нашем ассортименте вы найдете разнообразные игры для всех возрастов — от классических, знакомых многим, до современных хитов, завоевавших популярность по всему миру. Мы тщательно отбираем каждую игру, чтобы предложить вам только самые увлекательные варианты.
                    </p>
                </div>
            </div>

            <div className='container-carder'>
                <div className="card-item">
                    <img src={Sistema} alt='Система накопительной скидки' />
                    <p>Система накопительной скидки</p>
                </div>
                <div className="card-item">
                    <img src={BigAssortiment} alt='Большой ассортимент настольных игр' />
                    <p>Большой ассортимент настольных игр</p>
                </div>
                <div className="card-item">
                    <img src={Good} alt='Хорошее качество товара' />
                    <p>Хорошее качество товара</p>
                </div>
                <div className="card-item">
                    <img src={Bonus} alt='Система бонусов' />
                    <p>Система бонусов</p>
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
                            <li><Link to="/">Главная</Link></li>
                            <li><Link to="/catalog">Каталог</Link></li>
                            <li><Link to="/basket">Корзина</Link></li>
                            <li><Link to="/favourites">Избранное</Link></li>
                            <li><Link to="/personal">Профиль</Link></li>
                            <li><Link to="/delivery">Доставка</Link></li>
                            <li><Link to="/purchases">Покупки</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Услуги</h4>
                        <ul>
                            <li><Link to="/delivery">Доставка</Link></li>
                            <li><Link to="/support">Служба поддержки</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Документация</h4>
                        <ul>
                            <li><Link to="/delivery-terms">Условия доставки</Link></li>
                            <li><Link to="/storage-terms">Условия хранения</Link></li>
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

export default Home;


