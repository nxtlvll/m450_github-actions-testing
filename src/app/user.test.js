const getUserData = require('./user');
const fetchData = require('./fetchData');

jest.mock('./fetchData');

test('handles errors when fetching user data', async () => {
    fetchData.mockRejectedValue(new Error('Network Error'));

    try {
        await getUserData(1);
    } catch (e) {
        expect(e.message).toBe('Unable to fetch user data');
    }
});