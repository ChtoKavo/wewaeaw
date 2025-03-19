import React, { useState } from 'react';
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
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
          <li className="nav-item">
              <Link to="/AdminItem" className="nav-link">Управление товаром</Link>
            </li>
            <li className="nav-item">
              <Link to="/AdminEdit" className="nav-link">Редактирование товара</Link>
            </li>
            <li className="nav-item">
              <Link to="/AdminUser" className="nav-link">Пользователи</Link>
            </li>
            <li className="nav-item">
              <Link to="/vhod" className="nav-link">Выход</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="content-container">
        <div className="data-container">
          <div className="table-header">
            <div className="header-item">Id</div>
            <div className="header-item">Название товара</div>
            <div className="header-item">Цена</div>
            <div className="header-item">Количество</div>
            <div className="header-item">Удаление</div>
          </div>
          {/* Здесь будет выводиться база данных */}
        </div>

        <div className="side-container">
          <h2 className="side-container-title">Добавить товар</h2>
          <div className="image-preview">
            {selectedImage ? (
              <img src={selectedImage} alt="Выбранное изображение" className="preview-image" />
            ) : (
              <span>Изображение не выбрано</span>
            )}
          </div>
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
          <label htmlFor="image-upload" className="upload-button">
            Выбрать изображение
          </label>
          <div className="input-group">
            <input type="text" placeholder="Название" className="input-field" />
            <input type="text" placeholder="Возраст" className="input-field" />
            <input type="text" placeholder="Жанр" className="input-field" />
            <input type="text" placeholder="Количество игроков" className="input-field" />
            <input type="text" placeholder="Время игры" className="input-field" />
            <textarea placeholder="Описание" className="input-field textarea-field"></textarea>
            <input type="text" placeholder="Цена" className="input-field" />
          </div>
          <button className="save-button">Сохранить</button>
        </div>
      </div>
    </div>
  );
}

export default AdminItem;