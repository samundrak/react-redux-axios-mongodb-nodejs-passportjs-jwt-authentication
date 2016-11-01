/* global global */
const login = require('./../../../handlers/user/Login');
const register = require('./../../../handlers/user/Register');
const User = require('../../../handlers/user');
const getToken = require('../../../handlers/auth/token');
const _ = global._;
module.exports = {

    login: req => {
        req.checkBody('username', 'Username is required.')
            .notEmpty();

        req.checkBody('password', 'Password is required.')
            .notEmpty();
        let errors = req.validationErrors();

        if (errors)
            return req.error({message: global.helper.formattedValMessage(errors)}, 422);

        let username = req.body.username,
            password = req.body.password;

        login(username, password)
            .then(
                user => req.success(user),
                error => req.error({
                    message: error
                }, 401)
            );
    },

    register: req => {
        req.checkBody('email', 'Email is required.').notEmpty();
        req.checkBody('email', 'Invalid email address').isEmail();
        req.checkBody('first_name', 'First name is required').notEmpty();
        req.checkBody('last_name', 'Last name is required').notEmpty();
        req.checkBody('password', 'Password is required.').notEmpty();
        req.checkBody('password', 'Password must be above 6 characters').len(6);

        let errors = req.validationErrors();
        if (errors) {
            return req.error({message: global.helper.formattedValMessage(errors)}, 422);
        }

        User.exists({email: req.body.email})
            .then(() => {
                return req.error({
                    message: ['Email already exists']
                }, 422);

            }, () => {
                register(req.body)
                    .then(
                        user => req.success(user),
                        error => req.error(error)
                    );
            });
    },
    /**
     * @TODO hash must be unique
     * @param req
     * @param res
     */
    verifyHash(req, res){
        User.exists({
            hash: req.params.hash
        }).then(user => {
            if (user.status) {
                return res.send('Your account has been activated already.');
            }
            User.update({
                    hash: req.params.hash
                }, {
                    status: 1
                }
            ).then(() => {
                return res.send('Your account has been activated.');
            }, () => {
                return res.send('Unable to activate.').status(500);
            });
        }, ()=> {
            res.send('Incorrect verification code.').status(401);
        });
    },

    generateToken(req, res){
        let username = req.body.username,
            password = req.body.password;

        if (username && password) {
            login(username, password)
                .then(
                    user => res.json({token: getToken(user)}),
                    error => res.status(401).send(error)
                );
        } else {
            return res.status(401).send('Unauthorized');
        }
    },

    update: req => {
        let user = _.pick(req.body, ['first_name', 'last_name']);
        User.update({_id: req.user._id}, user)
            .then(
                user => req.success({message: 'Profile has been updated.'}),
                error => req.error(error)
            );
    }
};