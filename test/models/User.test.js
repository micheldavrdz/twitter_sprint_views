const User = require('./../../app/models/User');

describe('Unit tests for User class', () => {

    test('Test case 1 - Create an User object', () => {
        
        const user = new User(1, 'micheldavrdz', 'Michel', 'Bio');

        // Validate the object

/*      expect(user.id).toBe(1);
        expect(user.username).toBe('micheldavrdz');
        expect(user.name).toBe('Michel');
        expect(user.bio).toBe('Bio');
        expect(user.dateCreated).toBe('dateCreated');
        expect(user.lastUpdated).toBe('lastUpdated'); */

        expect(user.id).toBe(1);
        expect(user.username).toBe('micheldavrdz');
        expect(user.name).toBe('Michel');
        expect(user.bio).toBe('Bio');
        expect(user.dateCreated).not.toBeUndefined(); // Verify that dateCreated is not undefined
        expect(user.lastUpdated).not.toBeUndefined(); // Verify that lastUpdated is not undefined
    });

    test('Test case 2 - Add getters', () => {
        const user = new User(1, 'micheldavrdz', 'Michel', 'Bio');

        expect(user.getUsername).toBe('micheldavrdz');
        expect(user.getBio).toBe('Bio');
        expect(user.getDateCreated).not.toBeUndefined(); // Verify that getDateCreated is not undefined
        expect(user.getLastUpdated).not.toBeUndefined(); // Verify that getLastUpdated is not undefined
    });

    test('Test case 3 - Add setters', () => {
        const user = new User(1, 'micheldavrdz', 'Michel', 'Bio');

        user.setUsername = 'Davila';
        expect(user.username).toBe('Davila');

        user.setBio = 'New Bio';
        expect(user.bio).toBe('New Bio');
    });
})