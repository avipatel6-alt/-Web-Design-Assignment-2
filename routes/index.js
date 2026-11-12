var express = require('express');
var router = express.Router();

// Each route renders a matching EJS view from /views
router.get('/', (req, res) => res.render('index', { title: 'Home' }));
router.get('/about', (req, res) => res.render('about', { title: 'About Me' }));
router.get('/projects', (req, res) => res.render('projects', { title: 'Projects' }));
router.get('/contact', (req, res) => res.render('contact', { title: 'Contact Me' }));

module.exports = router;