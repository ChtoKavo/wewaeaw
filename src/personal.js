import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/Используются везде/logo.png';
import icon1 from './images/Используются везде/user-icon.png';
import icon2 from './images/Используются везде/love-icon.png';
import icon3 from './images/Используются везде/store-icon.png';
import qr from './images/Используются везде/qr-code.png';
import './personal.css'; // Подключаем стили

const Profile = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [avatar, setAvatar] = useState(null); // Состояние для хранения аватарки

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Обработка поиска при нажатии Enter
      console.log('Search query:', searchQuery);
    }
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result); // Устанавливаем аватарку
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNavigation = () => {
    // Обработка навигации
  };

  return (
    <div className="App" onClick={handleNavigation}>
      {/* Шапка и навигация */}
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
          <Link to="/favourites" className="icon-button">
            <img alt='love' src={icon2} />
          </Link>
          <Link to='/basket' className="icon-button">
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

      {/* Надпись "Личный кабинет" */}
      <div style={{marginTop: '20px', fontSize: '24px', fontWeight: 'bold' }}>
        Личный кабинет
      </div>

      {/* Основной контент */}
      <div className="content-container">
        {/* Прямоугольник */}
        <div
          className="rectangle"
          style={{
            width: '710px',
            height: '540px',
            backgroundColor: '#F9FBEF',
            marginTop: '90px', // Отступ сверху
            marginLeft: '240px', // Отступ слева
            position: 'relative', // Для позиционирования внутренних элементов
          }}
        >
          {/* Круглый инпут для аватарки */}
          <div className="avatar-upload">
            <input
              type="file"
              id="avatar-input"
              accept="image/*"
              onChange={handleAvatarChange}
              style={{ display: 'none' }} // Скрываем стандартный инпут
            />
            <label htmlFor="avatar-input" className="avatar-label">
              {avatar ? (
                <img src={avatar} alt="Аватарка" className="avatar-preview" />
              ) : (
                <span>+</span> // Плейсхолдер, если аватарка не выбрана
              )}
            </label>
          </div>

          {/* Два маленьких прямоугольника */}
          <div className="small-rectangles-container">
            <div className="small-rectangle"></div>
            <div className="small-rectangle"></div>
          </div>

          {/* Кнопки под прямоугольниками */}
          <div className="buttons-below-container">
            <button className="large-button">Выбрать способ оплаты</button>
            <button className="large-button">Ваши устройства</button>
          </div>
        </div>

        {/* Кнопки справа от прямоугольника */}
        <div className="buttons-right-container">
          <button className="profile-button">Редактировать профиль</button>
          <Link to="/favourites" className="profile-button">Избранное</Link>
          <Link to="/user" className="profile-button">Админ</Link>
          <Link to="/Buy" className="profile-button">Покупки</Link>
        </div>
      </div>
      <footer className="footer" style={{ marginTop: '50px' }}>
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
};

export default Profile;