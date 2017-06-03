const MAX_LENGTH_OF_WORD = 10;

export function createEmptyPlaceholdersArray (currentWord) {
    const numberOfPlaceholders = MAX_LENGTH_OF_WORD - currentWord.length;

    return Array(numberOfPlaceholders).fill(numberOfPlaceholders);
}
