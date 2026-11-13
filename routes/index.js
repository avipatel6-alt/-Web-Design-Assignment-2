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
  res.render('about', {
    title: 'About',
    skills: [
      { name: 'JavaScript',        icon: 'fa-brands fa-js',        level: 90 },
      { name: 'Node.js / Express', icon: 'fa-brands fa-node-js',   level: 85 },
      { name: 'HTML & CSS',        icon: 'fa-brands fa-html5',     level: 92 },
      { name: 'Bootstrap',         icon: 'fa-brands fa-bootstrap', level: 80 },
      { name: 'Git & GitHub',      icon: 'fa-brands fa-git-alt',   level: 78 },
      { name: 'Python',            icon: 'fa-brands fa-python',    level: 70 }
    ],
    journey: [
      { year: '2026', title: 'Web & Scripting Programming', text: 'Building full-stack apps with Express and EJS.' },
      { year: '2025', title: 'Networking & Security',       text: 'Labs in Cisco Packet Tracer and Linux administration.' },
      { year: '2024', title: 'Started my degree',           text: 'Networking and Security at Ontario Tech. First lines of code, and first bugs.' }
    ]
  });
}); // <-- this was missing

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