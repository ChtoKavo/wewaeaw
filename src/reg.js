import React from 'react';
import './reg.css';
import vhod from './images/Используются везде/vhod.png';

const App = () => {
  return (
    <div className="containerr">
      <div className="rectangle">
        <div className="image-container">
          <img src={vhod} alt="Описание изображения" />
        </div>
        <div className="form-container">
          <h1 className="login-title">Регистрация</h1> {/* Изменено на "Регистрация" */}
          <form>
            <div className="input-group">
              <input type="text" id="username" name="username" placeholder="Имя пользователя" required />
            </div>
            <div className="input-group">
              <input type="email" id="email" name="email" placeholder="Почта" required />
            </div>
            <div className="input-group">
              <input type="password" id="password" name="password" placeholder="Пароль" required />
            </div>
            <div className="input-group">
              <input type="password" id="confirm-password" name="confirm-password" placeholder="Повтор пароля" required />
            </div>
            <div className="input-group">
             <label>
             <input type="checkbox" required style={{ width: '10px', height: '10px' }} /> {/* Чекбокс */}
             Регистрируясь, вы принимаете пользовательское соглашение
            </label>
            </div>
            <button className='buttlol' type="submit">Зарегистрироваться</button> {/* Изменено на "Зарегистрироваться" */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;

