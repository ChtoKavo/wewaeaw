import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/Используются везде/logo.png';
import icon1 from './images/Используются везде/user-icon.png';
import icon2 from './images/Используются везде/love-icon.png';
import icon3 from './images/Используются везде/store-icon.png';
import qr from './images/Используются везде/qr-code.png';

const Profile = () => {
  const [userAvatar, setUserAvatar] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleProfileEdit = () => {
    console.log('Редактировать профиль');
  };

  const handleFavoritesList = () => {
    console.log('Избранное');
  };

  const handlePurchaseHistory = () => {
    console.log('Покупки');
  };

  const handleSelectPaymentMethod = () => {
    console.log('Выбрать способ оплаты');
  };

  const handleUserDevices = () => {
    console.log('Ваши устройства');
  };

  const handleAvatarUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!validTypes.includes(file.type)) {
        setErrorMessage('Пожалуйста, выберите изображение в формате JPEG, PNG или GIF.');
        return;
      }
      if (file.size > 2 * 1024 * 1024) { // 2MB limit
        setErrorMessage('Файл слишком большой. Пожалуйста, выберите изображение размером до 2MB.');
        return;
      }
      setErrorMessage('');
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Сброс ошибки через 5 секунд
  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const styles = {
    profileContainer: {
      padding: '20px',
    },
    profileHeader: {
      fontSize: '24px',
      marginBottom: '20px',
    },
    profileContent: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    profileBox: {
      flex: '1',
      marginRight: '20px',
    },
    avatarUpload: {
      display: 'block',
      cursor: 'pointer',
      marginBottom: '10px',
    },
    errorText: {
      color: 'red',
      marginTop: '10px',
    },
    actionButton: {
      width: '466px',
      height: '60px',
      padding: '0',
      fontSize: '16px',
      cursor: 'pointer',
      backgroundColor: '#CACCC1',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      transition: 'background-color 0.3s',
      marginBottom: '10px',
    },
    sideActions: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
  };

  return (
    <div style={styles.profileContainer}>
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
      <h1 style={styles.profileHeader}>Личный кабинет</h1>
      <div style={styles.profileContent}>
        <div style={styles.profileBox}>
          <label style={styles.avatarUpload}>
            <input type="file" className="file-input" accept="image/*" onChange={handleAvatarUpload} />
            {userAvatar ? <img src={userAvatar} alt="Avatar" /> : <span></span>}
          </label>
          {errorMessage && <p style={styles.errorText}>{errorMessage}</p>}
          
          <div className="button-box">
            <div className="small-box"></div>
            <div className="small-box"></div>
          </div>

          <div className="action-buttons">
            <button onClick={handleSelectPaymentMethod} style={styles.actionButton} aria-label="Выбрать способ оплаты">
              Выбрать способ оплаты
            </button>
            <button onClick={handleUserDevices} style={styles.actionButton} aria-label="Ваши устройства">
              Ваши устройства
            </button>
          </div>
        </div>

        <div style={styles.sideActions}>
          <button onClick={handleProfileEdit} style={styles.actionButton} aria-label="Редактировать профиль">
            Редактировать профиль
          </button>
          <button onClick={handleFavoritesList} style={styles.actionButton} aria-label="Избранное">
            Избранное
          </button>
          <button onClick={handlePurchaseHistory} style={styles.actionButton} aria-label="Покупки">
            Покупки
          </button>
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

export default Profile;

