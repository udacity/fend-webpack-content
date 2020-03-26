describe('postData', () => {
    it('should work with async/await', async () => {
        // expect.assertions(1);
        const data = await expect (Promise.resolve('response'));
        expect(data).toEqual(expect.anything());
    })
})