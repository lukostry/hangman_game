import  { createEmptyPlaceholdersArray } from '../index';

describe('createEmptyPlaceholdersArray', () => {
    const currentWord = ['t', 'e', 's', 't'];

    it('should return an array', () => {
        const result = createEmptyPlaceholdersArray(currentWord);
        expect(result instanceof Array).toBe(true);
    });
});
