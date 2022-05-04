const User = require('./../models/User');

class UserService {
    static create(id, username, name) {
        return new User(id, username, name, 'Sin bio');
    }

    static getInfo(user) {
        return [user.id, user.username, user.name, 'Sin bio'];
    }

    static updateUsername(user, username) {
        user.setUsername = username;
    }

    static getAllUsernames(users) {
        return users.map(user => user.username);
    }
}

module.exports = UserService;