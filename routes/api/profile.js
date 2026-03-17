const express = require('express');
const router = express.Router();

//@Route          api/profile
//@Desc            Test route
//@Access         Public

router.get('/', (req, res) => {
  res.send('Boom! Profile Route :)');
});

module.exports = router;