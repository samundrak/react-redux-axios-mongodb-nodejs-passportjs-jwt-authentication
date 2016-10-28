const api = require('express').Router();
const user = require('./User');

api.get('/me', (req, res) => {
    res.send(req.user);
});

api.post('/me', user.update);
module.exports = api;
