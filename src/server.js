// server.js
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Для обработки JSON-данных, если это потребуется

// Создание подключения к базе данных
const db = mysql.createConnection({
    host: 'localhost',
    user: 'newuser', // Замените на имя нового пользователя
    password: 'ваш_пароль', 
    database: 'УП02'
});


// Подключение к базе данных
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err); // Логирование ошибки
        return; // Прекращаем выполнение, если не удалось подключиться
    }
    console.log('MySQL connected...');
});

// Обработка GET-запроса для получения продуктов
app.get('/api/products', (req, res) => {
    const sql = 'SELECT ItemName, Price FROM Item';
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error executing query:', err); // Логирование ошибки
            return res.status(500).send('Server error'); // Отправка статуса 500 в случае ошибки
        }
        res.json(result); // Используем res.json для отправки JSON-ответа
    });
});

// Установка порта
const PORT = process.env.PORT || 3000; // Используем переменную окружения для порта
app.listen(PORT, '127.0.0.1', () => { // Используем localhost
    console.log(`Server started on port ${PORT}`);
});
