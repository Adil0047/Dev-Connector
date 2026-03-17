const express = require('express');
const router = express.Router();

//@Route          api/posts
//@Desc            Test route
//@Access         Public

router.get('/', (req, res) => {
  res.send('Boom Posts Route :)');
});

module.exports = router;