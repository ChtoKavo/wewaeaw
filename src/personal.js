import React from 'react';

import React, { useState, useEffect } from 'react';
import './personal.css'; // Импортируем CSS файл

const Personal = () => {
  const [avatar, setAvatar] = useState(null);
  const [error, setError] = useState('');

  const handleEditProfile = () => {
    console.log('Редактировать профиль');
  };

  const handleFavorites = () => {
    console.log('Избранное');
  };

  const handlePurchases = () => {
    console.log('Покупки');
  };

  const handlePaymentMethod = () => {
    console.log('Выбрать способ оплаты');
  };

  const handleDevices = () => {
    console.log('Ваши устройства');
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!validTypes.includes(file.type)) {
        setError('Пожалуйста, выберите изображение в формате JPEG, PNG или GIF.');
        return;
      }
      if (file.size > 2 * 1024 * 1024) { // 2MB limit
        setError('Файл слишком большой. Пожалуйста, выберите изображение размером до 2MB.');
        return;
      }
      setError('');
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Сброс ошибки через 5 секунд
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="container">
      <h1 className="header">Личный кабинет</h1>
      <div className="main-content">
        <div className="rectangle">
          <label className="avatar-input">
            <input type="file" className="input" accept="image/*" onChange={handleAvatarChange} />
            {avatar ? <img src={avatar} alt="Avatar" /> : <span></span>}
          </label>
          {error && <p className="error-message">{error}</p>}
          
          <div className="small-rectangle-container">
            <div className="small-rectangle"></div>
            <div className="small-rectangle"></div>
          </div>

          <div className="button-container">
            <button onClick={handlePaymentMethod} className="button" aria-label="Выбрать способ оплаты">
              Выбрать способ оплаты
            </button>
            <button onClick={handleDevices} className="button" aria-label="Ваши устройства">
              Ваши устройства
            </button>
          </div>
        </div>

        <div className="side-buttons">
  <button onClick={handleEditProfile} className="side-button" aria-label="Редактировать профиль">
    Редактировать профиль
  </button>
  <button onClick={handleFavorites} className="side-button" aria-label="Избранное">
    Избранное
  </button>
  <button onClick={handlePurchases} className="side-button" aria-label="Покупки">
    Покупки
  </button>
</div>
      </div>
    </div>
  );
};

export default Personal;
