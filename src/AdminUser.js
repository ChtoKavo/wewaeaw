import './AdminUser.css';

function AdminUser() {
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
      {/* Контейнер для базы данных */}
      <div className="data-container">
        {/* Шапка таблицы */}
        <div className="table-header">
          <div className="header-item">Id</div>
          <div className="header-item">Никнейм</div>
          <div className="header-item">Пароль</div>
          <div className="header-item">Аватарка</div>
          <div className="header-item">Дата регистрации</div>
          <div className="header-item">Последний вход</div>
        </div>
        {/* Здесь будет выводиться база данных */}
      </div>
    </div>
  );
}

export default AdminUser;