var express = require('express');
var router = express.Router();


/* GET Home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET About page.
   Skills and journey data are passed to the view as locals,
   so the EJS template can loop over them instead of hard-coding each card. */
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET Projects page. */
router.get('/projects', function (req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET Contact page. */
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact' });
});

/* POST Contact form. Logs the submission since there's no email service yet. */
router.post('/contact', function (req, res, next) {
  console.log('Contact form:', req.body);
  res.redirect('/contact');
});

module.exports = router;