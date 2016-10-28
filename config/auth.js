/*
 global global
 */
const passport = require("passport");
const passportJWT = require("passport-jwt");
const User = require('../server/handlers/user');

const cfg = global.config();
const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;
const params = {
    secretOrKey: cfg.auth.jwt.secret,
    jwtFromRequest: ExtractJwt.fromAuthHeader()
};

module.exports = function () {
    let strategy = new Strategy(params, function (payload, done) {
        User.find({
            _id: payload._id
        })
            .then(
                user => {
                    if (!user.status) {
                        return done(null, false);
                    }

                    user = global._.pick(user, ['email', 'first_name', 'last_name', 'status', '_id']);
                    return done(null, user);
                },
                error => {
                    return done(new Error(error), null);
                }
            );
    });
    passport.use(strategy);
    return {
        initialize: function () {
            return passport.initialize();
        },
        authenticate: function () {
            return passport.authenticate("jwt", cfg.auth.jwt.session);
        }
    };
};