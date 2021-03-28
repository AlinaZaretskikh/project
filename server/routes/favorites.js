var express = require('express');
var router = express.Router();
var db = require('../bd');

router.get('/', function(req, res, next) {
    db.any('SELECT * FROM favorites')
    .then(function(data) {
      res.send(data);
    })
    .catch(function(error) {
      console.log(error);
    });
  });

  // POST запрос на создание нового избранного
router.post('/', function(req, res) {
  // собираем данные об избранном в массив
  let data = [
    req.body.user_id,
    req.body.products_id,
    req.body.price,
    req.body.id,
    req.body.count
  ];
  // пытаемся записать данные об избранном в базу
  db.any('INSERT INTO favorites (user_id, products_id, price, id, count) VALUES ($1, $2, $3, $4, $5)', data)
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