const Promise = global.Promise;
const UserModel = require('../../model/User/index');
const _ = global._;

module.exports = class User {

    static find(clause) {
        return new Promise((resolve, reject) => {
            UserModel.findOne(clause, (error, user) => {
                if (error || !user) {
                    return reject('No User found');
                }

                user = _.omit(user, ['password']);
                return resolve(user);
            });
        });
    }

    static exists(filter) {
        return new Promise((resolve, reject) => {
            UserModel.findOne(filter, (error, user) => {
                if (user) {
                    return resolve(user);
                }

                return reject('No result found');
            });
        });

    }

    static update(condition, update) {
        return new Promise((resolve, reject) => {
            UserModel.update(condition, update, (error, user) => {
                if (error) {
                    return reject(error);
                }

                return resolve(user);
            });
        });
    }
}