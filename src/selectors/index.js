const LAST_LEVEL_OF_GAME = 11;

export function getIsGameOver (state) {
    return state.levelOfTheGame === LAST_LEVEL_OF_GAME;
}

export function getIsGameWon (state) {
    if (!state.currentWord.length) {
        return false;
    }

    return state.currentWord.every(obj => obj.wasGuessed);
}

export function getWasMissed (state) {
    return !!state.missedChars.length;
}
