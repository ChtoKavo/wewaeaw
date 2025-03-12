import React, { useState, useEffect } from 'react';

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
    </div>
  );
};

export default Profile;

