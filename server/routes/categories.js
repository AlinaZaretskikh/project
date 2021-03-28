var express = require('express');
var router = express.Router();
var db = require('../bd');

router.get('/', function(req, res, next) {
    db.any('SELECT * FROM categories')
    .then(function(data) {
      res.send(data);
    })
    .catch(function(error) {
      console.log(error);
    });
  });

  // POST запрос на создание новой категории
router.post('/', function(req, res) {
  // собираем данные о категории в массив
  let data = [
    req.body.name
  ];
  // пытаемся записать данные о категории в базу
  db.any('INSERT INTO categories (name) VALUES ($1)', data)
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