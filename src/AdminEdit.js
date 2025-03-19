import React, { useState } from 'react';
import './AdminEdit.css';
import { Link } from 'react-router-dom';

function AdminEdit() {
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
      <header className="admin-edit-header">
        <nav className="admin-edit-nav">
          <ul className="admin-edit-nav-list">
            <li className="admin-edit-nav-item">
              <Link to="/item" className="admin-edit-nav-link">Управление товаром</Link>
            </li>
            <li className="admin-edit-nav-item">
              <Link to="/edit" className="admin-edit-nav-link">Редактирование товара</Link>
            </li>
            <li className="admin-edit-nav-item">
              <Link to="/user" className="admin-edit-nav-link">Пользователи</Link>
            </li>
            <li className="admin-edit-nav-item">
              <Link to="/vhod" className="admin-edit-nav-link">Выход</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="admin-edit-container-wrapper">
        <div className="admin-edit-data-container">
          <div className="admin-edit-table-header">
            <div className="admin-edit-column-id">Id товара</div>
            <div className="admin-edit-column-name">Имя товара</div>
            <div className="admin-edit-column-price">Цена</div>
            <div className="admin-edit-column-quantity">Количество</div>
            <div className="admin-edit-column-actions">Редактирование</div>
          </div>

          <div className="admin-edit-table-row">
            <div className="admin-edit-column-id">1</div>
            <div className="admin-edit-column-name">Товар 1</div>
            <div className="admin-edit-column-price">1000 ₽</div>
            <div className="admin-edit-column-quantity">10</div>
            <div className="admin-edit-column-actions">
              <button className="admin-edit-edit-button">Редактировать</button>
            </div>
          </div>

          <div className="admin-edit-table-row">
            <div className="admin-edit-column-id">2</div>
            <div className="admin-edit-column-name">Товар 2</div>
            <div className="admin-edit-column-price">1500 ₽</div>
            <div className="admin-edit-column-quantity">5</div>
            <div className="admin-edit-column-actions">
              <button className="admin-edit-edit-button">Редактировать</button>
            </div>
          </div>
        </div>

        <div className="admin-edit-side-container">
          <div className="admin-edit-image-preview">
            {selectedImage ? (
              <img src={selectedImage} alt="Превью товара" />
            ) : (
              <span>Выберите изображение</span>
            )}
          </div>

          <label className="admin-edit-upload-button">
            Добавить изображение
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleImageUpload}
            />
          </label>

          <div className="admin-edit-input-group">
            <label>Название</label>
            <input type="text" placeholder="Введите название" />
          </div>

          <div className="admin-edit-input-group">
            <label>Возраст</label>
            <input type="text" placeholder="Введите возраст" />
          </div>

          <div className="admin-edit-input-group">
            <label>Жанр</label>
            <input type="text" placeholder="Введите жанр" />
          </div>

          <div className="admin-edit-input-group">
            <label>Количество игроков</label>
            <input type="text" placeholder="Введите количество игроков" />
          </div>

          <div className="admin-edit-input-group">
            <label>Время игры</label>
            <input type="text" placeholder="Введите время игры" />
          </div>

          <div className="admin-edit-input-group">
            <label>Описание</label>
            <textarea placeholder="Введите описание"></textarea>
          </div>

          <div className="admin-edit-input-group">
            <label>Цена</label>
            <input type="text" placeholder="Введите цену" />
          </div>

          <button className="admin-edit-save-button">Сохранить</button>
        </div>
      </div>
    </div>
  );
}

export default AdminEdit;