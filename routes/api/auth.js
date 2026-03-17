const express = require('express');
const router = express.Router();

//@Route          api/auth
//@Desc            Test route
//@Access         Public

router.get('/', (req, res) => {
  res.send('Boom Auth Route :)');
});

module.exports = router;