const express = require('express');
const { getHome, getAbout, getAdmission, getLifeAtKellex, getGallery, getNewsAndEvents, getLogin, getAcademics, getNews, getSingleNews, getEvent, getMaintenance, getError404 } = require('../controller/ViewController');
const router = express.Router();


router.get('/', getHome);
router.get('/about-us', getAbout)
router.get('/admission', getAdmission)
router.get('/academics', getAcademics)
router.get('/life-at-kellex', getLifeAtKellex)
router.get('/gallery', getGallery)
router.get('/news-and-events', getNewsAndEvents)
router.get('/events/:id', getEvent)
router.get('/news', getNews)
router.get('/news/:id', getSingleNews)
router.get('/student-portal', getMaintenance)
router.get('/parent-portal', getMaintenance)
router.get('/staff-portal', getMaintenance)
router.get('/for-parents', getMaintenance)
router.get('/login', getLogin)
router.get('*', getError404)


module.exports = router;