const cfg = global.config();
var jwt = require("jwt-simple");

module.exports = user => jwt.encode(user, cfg.auth.jwt.secret);