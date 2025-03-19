import './AdminUser.css';
import { Link } from 'react-router-dom';

function AdminUser() {
  return (
    <div>
      <header className="admin-user-header">
        <nav className="admin-user-nav">
          <ul className="admin-user-nav-list">
            <li className="admin-user-nav-item">
              <Link to="/item" className="admin-user-nav-link">Управление товаром</Link>
            </li>
            <li className="admin-user-nav-item">
              <Link to="/edit" className="admin-user-nav-link">Редактирование товара</Link>
            </li>
            <li className="admin-user-nav-item">
              <Link to="/user" className="admin-user-nav-link">Пользователи</Link>
            </li>
            <li className="admin-user-nav-item">
              <Link to="/vhod" className="admin-user-nav-link">Выход</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* Контейнер для базы данных */}
      <div className="admin-user-data-container">
        {/* Шапка таблицы */}
        <div className="admin-user-table-header">
          <div className="admin-user-header-item">Id</div>
          <div className="admin-user-header-item">Никнейм</div>
          <div className="admin-user-header-item">Пароль</div>
          <div className="admin-user-header-item">Аватарка</div>
          <div className="admin-user-header-item">Дата регистрации</div>
          <div className="admin-user-header-item">Последний вход</div>
        </div>
        {/* Здесь будет выводиться база данных */}
      </div>
    </div>
  );
}

export default AdminUser;