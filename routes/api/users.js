const express = require('express');
const router = express.Router();

//@Route          api/users
//@Desc            Test route
//@Access         Public

router.get('/', (req, res) => {
  res.send('Boom Users Route :)');
});

module.exports = router;
