import reducer from '../reducer';

const INIT_STATE = {
    currentWord: [],
    levelOfTheGame: 0,
    missedChars: [],
};

describe('Root app reducer', () => {
    it('should render the initial state', () => {
        expect(reducer(undefined, {})).toEqual(INIT_STATE);
    });

    it('should handle FETCHED_NEW_WORD', () => {
        const newWordAction = {
            type: 'FETCHED_NEW_WORD',
            payload: [
                {
                    id: '1111-222',
                    character: 'A',
                    wasGuessed: false,
                },
                {
                    id: '0000-00',
                    character: 'B',
                    wasGuessed: false,
                }
            ],
        };

        expect(reducer(INIT_STATE, newWordAction).currentWord).toEqual(newWordAction.payload);
    });

    it('should handle GAME_RELOADED', () => {
        const reloadAction = {
            type: 'GAME_RELOADED',
        };

        expect(reducer(INIT_STATE, reloadAction)).toEqual(INIT_STATE);
    });

    it('should handle CHARACTER_PRESSED', () => {
        const charPressedAction = {
            type: 'CHARACTER_PRESSED',
            payload: 'K',
        };

        expect(reducer(INIT_STATE, charPressedAction).missedChars).toHaveLength(1);
    });
});
