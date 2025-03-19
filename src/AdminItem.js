import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminItem.css';

function AdminItem() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <header className="admin-item-header">
        <nav className="admin-item-nav">
          <ul className="admin-item-nav-list">
            <li className="admin-item-nav-item">
              <Link to="/item" className="admin-item-nav-link"><button>Управление товаром</button></Link>
            </li>
            <li className="admin-item-nav-item">
              <Link to="/edit" className="admin-item-nav-link"> <button>Редактирование товара</button></Link>
            </li>
            <li className="admin-item-nav-item">
              <Link to="/user" className="admin-item-nav-link">Пользователи</Link>
            </li>
            <li className="admin-item-nav-item">
              <Link to="/vhod" className="admin-item-nav-link">Выход</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="admin-item-content-container">
        <div className="admin-item-data-container">
          <div className="admin-item-table-header">
            <div className="admin-item-header-item">Id</div>
            <div className="admin-item-header-item">Название товара</div>
            <div className="admin-item-header-item">Цена</div>
            <div className="admin-item-header-item">Количество</div>
            <div className="admin-item-header-item">Удаление</div>
          </div>
          {/* Здесь будет выводиться база данных */}
        </div>

        <div className="admin-item-side-container">
          <h2 className="admin-item-side-container-title">Добавить товар</h2>
          <div className="admin-item-image-preview">
            {selectedImage ? (
              <img src={selectedImage} alt="Выбранное изображение" className="admin-item-preview-image" />
            ) : (
              <span>Изображение не выбрано</span>
            )}
          </div>
          <input
            type="file"
            id="admin-item-image-upload"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
          <label htmlFor="admin-item-image-upload" className="admin-item-upload-button">
            Выбрать изображение
          </label>
          <div className="admin-item-input-group">
            <input type="text" placeholder="Название" className="admin-item-input-field" />
            <input type="text" placeholder="Возраст" className="admin-item-input-field" />
            <input type="text" placeholder="Жанр" className="admin-item-input-field" />
            <input type="text" placeholder="Количество игроков" className="admin-item-input-field" />
            <input type="text" placeholder="Время игры" className="admin-item-input-field" />
            <textarea placeholder="Описание" className="admin-item-input-field admin-item-textarea-field"></textarea>
            <input type="text" placeholder="Цена" className="admin-item-input-field" />
          </div>
          <button className="admin-item-save-button">Сохранить</button>
        </div>
      </div>
    </div>
  );
}

export default AdminItem;