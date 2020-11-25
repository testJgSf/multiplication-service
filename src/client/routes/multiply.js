let express = require('express');
let router = express.Router();
let { main } = require('../../business/multiplyController');

router.post('/multiply', function(req, res) {
  const response = main(req.body.factors);
  res.status(response.code).json(response.body);
});

module.exports = router;
