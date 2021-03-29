var express = require('express');
var router = express.Router();
var db = require('../bd');

router.get('/', function(req, res, next) {
    db.any('SELECT * FROM products')
    .then(function(data) {
      res.send(data);
    })
    .catch(function(error) {
      console.log(error);
    });
  });

  // POST запрос на создание нового продукта
router.post('/', function(req, res) {
  // собираем данные о продукте в массив
  let data = [
    req.body.name,
    req.body.price,
    req.body.rank,
    req.body.description,
    req.body.count
  ];
  // пытаемся записать данные о продукте в базу
  db.any('INSERT INTO products (name, price, rank, description, count) VALUES ($1, $2, $3, $4, $5)', data)
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

router.get('/:category_id', function(req, res, next) {
  let params = [
    req.params.category_id
  ]
  db.any('SELECT * FROM products WHERE category_id = $1', params)
  .then(function(data) {
    res.send(data);
  })
  .catch(function(error) {
    console.log(error);
  });
});

module.exports = router;