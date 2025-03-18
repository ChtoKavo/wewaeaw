import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/Используются везде/logo.png';
import icon1 from './images/Используются везде/user-icon.png';
import icon2 from './images/Используются везде/love-icon.png';
import icon3 from './images/Используются везде/store-icon.png';
import qr from './images/Используются везде/qr-code.png';
import basket from './images/Используются везде/basket.png';
import './App.css';
import './Footer.css';

function Buy({ searchQuery, handleInputChange, handleKeyPress, handleSearch }) {
  const purchases = [
    { name: "Дюна: Война за Арракис", price: "14 990Р" },
    { name: "Ужас Аркхама. Карточная игра", price: "2 990Р" },
    { name: "Оайвхорт: Верные клятве.", price: "19 990Р" },
    { name: "Подземелья и пёсики", price: "990Р" },
    { name: "Эверделл", price: "7 990Р" },
    { name: "Взрывные котята", price: "990Р" },
    { name: "Бункер", price: "2 990Р" },
    { name: "Чёрная книга", price: "4 990Р" },
    { name: "500 злобных карт", price: "1 990Р" },
    { name: "Descent: Сказания тьмы", price: "19 990Р" },
    { name: "Зомбицци: Iron Maiden", price: "14 990Р" },
    { name: "МепеСlub", price: "2 990Р" }
  ];

  const styles = {
    h1aboba: {
      padding: '10px',
      marginLeft: '12px'
    },
    header: {
      textAlign: 'center',
      marginBottom: '20px'
    },
    productGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: '20px',
      padding: '20px'
    },
    productCard: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '10px',
      textAlign: 'center',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      position: 'relative' // Добавлено для позиционирования корзины
    },
    productImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px'
    },
    productContent: {
      marginTop: '10px'
    },
    basketIcon: {
      position: 'absolute', // Абсолютное позиционирование
      bottom: '10px',      // Отступ снизу
      right: '10px',       // Отступ справа
      width: '24px',       // Размер иконки
      height: '24px',
      cursor: 'pointer'    // Курсор при наведении
    },
    footer: {
      textAlign: 'center',
      marginTop: '20px',
      paddingTop: '10px',
      borderTop: '1px solid #ddd'
    }
  };

  return (
    <div style={styles.container}>
      <header className="header">
        <img src={logo} alt="Логотип" className="logo" />
        <input
          style={{ width: '500px' }}
          placeholder='Название товара'
          type='text'
          value={searchQuery}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress} 
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
      <h1 style={styles.h1aboba}> Покупки</h1>
      <main style={styles.productGrid}>
        {purchases.map((item, index) => (
          <div key={index} style={styles.productCard}>
            <img
              src={`https://avatars.mds.yandex.net/i?id=872dc79fb43f6d5d72c2024dff7bf222-5910939-images-thumbs&n=13`}
              alt={`Товар ${index + 1}`}
              style={styles.productImage}
            />
            <div style={styles.productContent}>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
            <img
              src={basket}
              alt="Корзина"
              style={styles.basketIcon}
              onClick={() => console.log(`Товар "${item.name}" добавлен в корзину`)}
            />
          </div>
        ))}
      </main>
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

export default Buy;