var express = require('express');
var router = express.Router();
var db = require('../bd');

// авторизация пользователя
router.post('/login', function(req, res) {
  let data = [
    req.body.login,
    req.body.password
  ];
  db.any('SELECT id FROM users WHERE login = $1 AND password = $2', data)
  .then(function(result) {
    if (result && result.length > 0) {
      let user = {
        id: result[0].id
      };
      return res.send(user);
    } else {
      let user = {
        id: 0
      };
      return res.send(user);
    }
  })
  .catch(function(error) {
    console.log(error);
    return res.sendStatus(500);
  });
});
// GET-запрос на получение пользователей
router.get('/', function(req, res) {
  // вызываем SELECT запрос к базе данных
  db.any('SELECT * FROM users')
  // если запрос успешен - отправляем данные о пользователях
  .then(function(data) {
    return res.send(data);
  })
  // если запрос выполнился с ошибкой - записываем ошибку в
  // в консоль и отправляем на клиент статус-код 500 (ошибка на сервере)
  .catch(function(error) {
    console.log(error);
    return res.sendStatus(500);
  });
});

// GET-запрос на получение данных об одном пользователе
router.get('/:id', function(req, res) {
  let params = [
    req.params.id
  ];
  // вызываем SELECT запрос к базе данных
  db.any('SELECT * FROM users WHERE id = $1', params)
  // если запрос успешен - отправляем данные о пользователях
  .then(function(data) {
    return res.send(data);
  })
  // если запрос выполнился с ошибкой - записываем ошибку в
  // в консоль и отправляем на клиент статус-код 500 (ошибка на сервере)
  .catch(function(error) {
    console.log(error);
    return res.sendStatus(500);
  });
});

// POST запрос на создание нового пользователя
router.post('/', function(req, res) {
  // собираем данные о пользователе в массив
  let data = [
    req.body.login,
    req.body.password,
    req.body.name,
    req.body.surname,
    req.body.age,
    req.body.address
  ];
  // пытаемся записать данные о пользователе в базу
  db.any('INSERT INTO users (login, password, name, surname, age, address) VALUES ($1, $2, $3, $4, $5, $6)', data)
  // если запрос успешен - отправляем статус ОК
  .then(function() {
    return res.sendStatus(200);
  })
  // если запрос выполнился с ошибкой - записываем ошибку в
  // в консоль и отправляем на клиент статус-код 500 (ошибка на сервере)
  .catch(function(error) {
    console.log(error);
    return res.sendStatus(500);
  });
});

// PUT запрос на изменение данных о пользователе
router.put('/', function(req, res) {
  // собираем данные о пользователе в массив
  let data = [
    req.body.login,
    req.body.password,
    req.body.name,
    req.body.surname,
    req.body.age,
    req.body.id
  ];
  // пытаемся обновить данные о пользователе
  db.any('UPDATE users SET login = $1, password = $2, name = $3, surname = $4, age = $5 WHERE id = $6', data)
  // если запрос успешен - отправляем статус ОК
  .then(function() {
    res.sendStatus(200);
  })
  // если запрос выполнился с ошибкой - записываем ошибку в
  // в консоль и отправляем на клиент статус-код 500 (ошибка на сервере)
  .catch(function(error) {
    console.log(error);
    return res.sendStatus(500);
  });
});

// DELETE запрос на удаление пользователя
router.delete('/', function(req, res) {
  // собираем данные о пользователе в массив
  let data = [
    req.body.id
  ]
  // удаляем пользователя с нужным id
  db.any('DELETE FROM users WHERE id = $1', data)
  // если запрос успешен - отправляем статус ОК
  .then(function() {
    return res.sendStatus(200);
  })
  // если запрос выполнился с ошибкой - записываем ошибку в
  // в консоль и отправляем на клиент статус-код 500 (ошибка на сервере)
  .catch(function(error) {
    console.log(error);
    return res.sendStatus(500);
  });
});

module.exports = router;