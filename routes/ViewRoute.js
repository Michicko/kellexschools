const express = require('express');
const { getHome } = require('../controller/ViewController');
const router = express.Router();


router.get('/', getHome);


module.exports = router;