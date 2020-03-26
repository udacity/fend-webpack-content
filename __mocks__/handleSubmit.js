test('should return value', () => {
    const func = async function handleSubmit(e) {
        const data = generateText('dinosaur');
        expect(data).toBe('dinosaur');
    }
});