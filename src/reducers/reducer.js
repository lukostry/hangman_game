const INIT_STATE = {
    currentWord: [],
    levelOfTheGame: 0,
    missedCharacters: [],
};

function updateCurrentWord (word, char) {
    return word.map((obj) => {
        if (obj.character === char) {
            return {
                ...item,
                wasGuessed: true,
            };
        }

        return item;
    });
}

function updateAfterInput (state, char) {
    const wasCharacterGuessed = state.currentWord.some(obj => obj.character === char);

    if (wasCharacterGuessed) {
        return {
            ...state,
            currentWord: updateCurrentWord(state.currentWord, char),
        };
    }

    return {
        ...state,
        levelOfTheGame: state.levelOfTheGame + 1,
        missedCharacters: [...state.missedCharacters, char],
    };
}

function reducer (state = INIT_STATE, action) {
    switch (action.type) {
        case 'FETCHED_NEW_WORD':
            return {
                ...state,
                currentWord: action.payload,
            };

        case 'CHARACTER_PRESSED':
            return updateAfterInput(state, action.payload);

        case 'GAME_RELOADED':
            return INIT_STATE;

        default:
            return state;
    }
}

export default reducer;
