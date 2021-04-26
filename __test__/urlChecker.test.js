import { checkUrl } from '../src/client/js/urlChecker';
console.error = jest.fn()

describe('verify url', () => {
    const website = 'https://google.com';
    test('Verified link', () => {
        expect(checkUrl(website));
    });
});
