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

router.get('/:user_id', function(req, res, next) {
  let params = [
    req.params.user_id
  ]
  db.any('SELECT * FROM favorites WHERE user_id = $1', params)
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
    req.body.product_id,
    req.body.price,
    req.body.count
  ];
  // пытаемся записать данные об избранном в базу
  db.any('INSERT INTO favorites (user_id, product_id, price, count) VALUES ($1, $2, $3, $4)', data)
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