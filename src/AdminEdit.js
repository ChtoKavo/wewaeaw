import React, { useState } from 'react'; // Импортируем useState
import './AdminEdit.css';
import { Link } from 'react-router-dom';

function AdminEdit() {
  // Состояние для хранения выбранного изображения
  const [selectedImage, setSelectedImage] = useState(null);

  // Функция для обработки выбора файла
  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Получаем выбранный файл
    if (file) {
      const reader = new FileReader(); // Создаем FileReader для чтения файла
      reader.onloadend = () => {
        setSelectedImage(reader.result); // Устанавливаем изображение в состояние
      };
      reader.readAsDataURL(file); // Читаем файл как Data URL
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

      {/* Обертка для контейнеров */}
      <div className="container-wrapper">
        {/* Основной контейнер для данных */}
        <div className="data-container">
          {/* Шапка таблицы */}
          <div className="table-header">
            <div className="column-id">Id товара</div>
            <div className="column-name">Имя товара</div>
            <div className="column-price">Цена</div>
            <div className="column-quantity">Количество</div>
            <div className="column-actions">Редактирование</div>
          </div>

          {/* Пример строки с данными */}
          <div className="table-row">
            <div className="column-id">1</div>
            <div className="column-name">Товар 1</div>
            <div className="column-price">1000 ₽</div>
            <div className="column-quantity">10</div>
            <div className="column-actions">
              <button className="edit-button">Редактировать</button>
            </div>
          </div>

          {/* Ещё одна строка для примера */}
          <div className="table-row">
            <div className="column-id">2</div>
            <div className="column-name">Товар 2</div>
            <div className="column-price">1500 ₽</div>
            <div className="column-quantity">5</div>
            <div className="column-actions">
              <button className="edit-button">Редактировать</button>
            </div>
          </div>
        </div>

        {/* Второй контейнер */}
        <div className="side-container">
          {/* Место для картинки */}
          <div className="image-preview">
            {selectedImage ? (
              <img src={selectedImage} alt="Превью товара" /> // Отображаем выбранное изображение
            ) : (
              <span>Выберите изображение</span> // Сообщение, если изображение не выбрано
            )}
          </div>

          {/* Кнопка для добавления картинки */}
          <label className="upload-button">
            Добавить изображение
            <input
              type="file"
              accept="image/*" // Разрешаем только изображения
              style={{ display: 'none' }} // Скрываем стандартный input
              onChange={handleImageUpload} // Обработчик выбора файла
            />
          </label>

          {/* Инпуты для ввода данных */}
          <div className="input-group">
            <label>Название</label>
            <input type="text" placeholder="Введите название" />
          </div>

          <div className="input-group">
            <label>Возраст</label>
            <input type="text" placeholder="Введите возраст" />
          </div>

          <div className="input-group">
            <label>Жанр</label>
            <input type="text" placeholder="Введите жанр" />
          </div>

          <div className="input-group">
            <label>Количество игроков</label>
            <input type="text" placeholder="Введите количество игроков" />
          </div>

          <div className="input-group">
            <label>Время игры</label>
            <input type="text" placeholder="Введите время игры" />
          </div>

          <div className="input-group">
            <label>Описание</label>
            <textarea placeholder="Введите описание"></textarea>
          </div>

          <div className="input-group">
            <label>Цена</label>
            <input type="text" placeholder="Введите цену" />
          </div>

          {/* Кнопка "Сохранить" */}
          <button className="save-button">Сохранить</button>
        </div>
      </div>
    </div>
  );
}

export default AdminEdit;