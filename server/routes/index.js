const express = require('express');
const router = express.Router();
const user = require('./api/User');

module.exports = () => {
    router.get('/', function (req, res) {
        res.render('guest');
    });

    router.get('/app', function (req, res) {
        res.render('app');
    });
    router.post('/login', user.login);
    router.post('/register', user.register);
    router.get('/verify/:hash', user.verifyHash);
    router.post("/authorize", user.generateToken);
    return router;
};
