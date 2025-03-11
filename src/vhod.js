import React from 'react';
import './App.css';
import vhod from './images/Используются везде/vhod.png';

const App = () => {
  return (
    <div className="containerr">
      <div className="rectangle">
        <div className="image-container">
          <img src={vhod} alt="Описание изображения" />
        </div>
        <div className="form-container">
          <h2>Вход</h2>
          <form>
            <div className="input-group">
              <input type="text" id="username" name="username" placeholder="Имя пользователя" />
            </div>
            <div className="input-group">
              <input type="password" id="password" name="password" placeholder="Пароль" />
            </div>
            <button className='buttlol' type="submit">Войти</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
