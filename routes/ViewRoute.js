const express = require('express');
const { getHome, getAbout, getAdmission, getLifeAtKellex, getGallery, getNewsAndEvents, getLogin, getAcademics } = require('../controller/ViewController');
const router = express.Router();


router.get('/', getHome);
router.get('/about-us', getAbout)
router.get('/admission', getAdmission)
router.get('/academics', getAcademics)
router.get('/life-at-kellex', getLifeAtKellex)
router.get('/gallery', getGallery)
router.get('/news-and-events', getNewsAndEvents)
router.get('/login', getLogin)


module.exports = router;