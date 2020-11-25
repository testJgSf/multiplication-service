let express = require('express');
let router = express.Router();
let { main } = require('../../business/multiplyController');
let { multiplicationRequestValidations, checkValidations } = require('../../business/utils/multiplicationRequestValidations');

router.post('/multiply', [multiplicationRequestValidations(), checkValidations],(req, res) =>{
  const response = main(req.body.factors);
  res.status(response.code).json(response.body);
});

module.exports = router;
