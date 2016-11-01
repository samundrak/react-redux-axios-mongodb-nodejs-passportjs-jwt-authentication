/*
 global global
 */
const User = require('../user');
const Promise = global.Promise;
const bcrypt = require('bcrypt');
const getToken = require('../auth/token');

module.exports = (username, password) => {

    return new Promise((resolve, reject) => {
        return User.exists({
            email: username
        }).then(user => {

            if (!user.status) {
                return reject(`Your account is not active, Please check your email ${user.email}`);
            }

            if (!bcrypt.compareSync(password, user.password)) {
                return reject(`Username/Password didn't matched.`);
            }


            user = global._.pick(user, ['_id']);
            return resolve({
                token: getToken(user)
            });
        }, () => {
            return reject(`No User found.`);
        });
    });
};