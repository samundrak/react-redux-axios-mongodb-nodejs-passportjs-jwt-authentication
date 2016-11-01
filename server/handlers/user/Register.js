/*
 global global
 */
const bcrypt = require('bcrypt');
const UserModel = require('../../model/User/index');
const Promise = global.Promise;
module.exports = ({email, password, first_name, last_name}) => {
    let salt = bcrypt.genSaltSync(10);
    password = bcrypt.hashSync(password, salt);
    let hash = bcrypt.hashSync(email + Date.now(), salt);


    return new Promise((resolve, reject)=> {
        return UserModel.create({
            email,
            password,
            first_name,
            last_name,
            hash
        }, (error, user) => {
            if (error) {
                return reject({
                    success: 0,
                    message: `Unable to add user.`
                });
            }

            user = global._.pick(user, ['_id']);
            return resolve(user);
        });
    });

};