import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [products, setProducts] = useState([]);

    // Загрузка данных из базы данных
    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Ошибка при загрузке данных:', error));
    }, []);

    // Обработка навигации
    const handleNavigation = (e) => {
        if (e.target.tagName !== 'INPUT') {
            if (!isAuthenticated) {
                e.preventDefault();
                navigate('/login');
            }
        }
    };

    // Поиск товаров
    const handleSearch = async () => {
        if (searchQuery.trim() === '') {
            setSearchResults([]); // Очистка результатов, если запрос пустой
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/api/search?q=${searchQuery}`);
            const data = await response.json();
            setSearchResults(data);
        } catch (error) {
            console.error('Ошибка при поиске:', error);
        }
    };

    // Обработка изменения поискового запроса
    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Обработка нажатия Enter
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    // Настройки слайдера
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

    return (
        <div className="App" onClick={handleNavigation}>
            <header className="header">
                <img src={logo} alt="Логотип" className="logo" />
                <input 
                    style={{ width: '500px' }} 
                    placeholder='Название товара' 
                    type='text' 
                    value={searchQuery}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress} // Обработка нажатия Enter
                />
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

            {/* Отображение результатов поиска */}
            {searchResults.length > 0 && (
                <div className='new-products'>
                    <div className="new-products-header">
                        <h1 className='h1-new'>Результаты поиска</h1>
                    </div>
                    <div className="product-grid">
                        {searchResults.map(product => (
                            <ProductCard key={product.idItem} product={product} />
                        ))}
                    </div>
                </div>
            )}

            {/* Отображение новинок, если нет результатов поиска */}
            {searchResults.length === 0 && (
                <div className='new-products'>
                    <div className="new-products-header">
                        <h1 className='h1-new'>Новинки</h1>
                        <div className="more-link-container">
                            <Link to="/catalog" className="more-link">Еще</Link>
                            <img src={arrow} alt='Стрелка' className="arrow-icon" />
                        </div>
                    </div>
                    <div className="product-grid">
                        {products.map(product => (
                            <ProductCard key={product.idItem} product={product} />
                        ))}
                    </div>
                </div>
            )}

            {/* Остальная часть вашего компонента */}
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