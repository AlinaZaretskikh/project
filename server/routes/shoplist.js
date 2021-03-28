var express = require('express');
var router = express.Router();
var db = require('../bd');

router.get('/', function(req, res, next) {
    db.any('SELECT * FROM shoplist')
    .then(function(data) {
      res.send(data);
    })
    .catch(function(error) {
      console.log(error);
    });
  });

  // POST запрос на создание новой корзины
router.post('/', function(req, res) {
  // собираем данные о корзине в массив
  let data = [
    req.body.user_id,
    req.body.product_id,
    req.body.count,
    req.body.price
  ];
  // пытаемся записать данные о корзине в базу
  db.any('INSERT INTO shoplist (user_id, product_id, count, price) VALUES ($1, $2, $3, $4)', data)
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