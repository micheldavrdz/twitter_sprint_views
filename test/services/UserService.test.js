const UserService = require('./../../app/services/UserService');

describe('Tests for UserService', () => {
    test('Test case 1 - Create a new user using UserService', () => {
        const user = UserService.create(1,'carlogilmar', 'Carlo');

        expect(user.username).toBe('carlogilmar');
        expect(user.name).toBe('Carlo');
        expect(user.id).toBe(1);
        expect(user.bio).not.toBeUndefined();
    })

    test('Test case 2 - Get all user data in a list', () => {
        const user = UserService.create(1,'carlogilmar', 'Carlo');
        const userInfoInList = UserService.getInfo(user);

        expect(userInfoInList[0]).toBe(1);
        expect(userInfoInList[1]).toBe('carlogilmar');
        expect(userInfoInList[2]).toBe('Carlo');
        expect(userInfoInList[3]).toBe('Sin bio');
    })

    test('Test case 3 - Update username', () => {
        const user = UserService.create(1,'carlogilmar', 'Carlo');
        UserService.updateUsername(user, 'carlog');

        expect(user.username).toBe('carlog');
    })

    test('Test case 4 - Given a list of users, give me the list of usernames', () => {
        const user1 = UserService.create(1,'carlogilmar', 'Carlo');
        const user2 = UserService.create(2,'carlogilmar2', 'Carlo');
        const user3 = UserService.create(3,'carlogilmar3', 'Carlo');

        const usernames = UserService.getAllUsernames([user1, user2, user3]);

        expect(usernames[0]).toBe('carlogilmar');
        expect(usernames[1]).toBe('carlogilmar2');
        expect(usernames[2]).toBe('carlogilmar3');
    })
})