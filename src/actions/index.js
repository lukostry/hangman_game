import axios from 'axios';
import { v4 } from 'uuid';

const API_CONFIG = {
    headers: { 'X-Mashape-Key': 'u5gGqvyur4mshRDxulUaySLKfIYhp1jF4objsnJefU3WAntnmX' },
};

const WORD_URL = 'https://wordsapiv1.p.mashape.com/words/?lettersMax=10&random=true';

export const fetchNewWord = () => dispatch =>
    axios.get(WORD_URL, API_CONFIG)
        .then((response) => {
            const wordConvertedToArr = response.data.word.toUpperCase().split('');

            dispatch({
                type: 'GAME_RELOADED',
            });

            dispatch({
                type: 'FETCHED_NEW_WORD',
                payload: wordConvertedToArr.map(char => ({
                    character: char,
                    id: v4(),
                    wasGuessed: false,
                })),
            });

            return Promise.resolve();
        });

export const pressCharacter = char => ({
    type: 'CHARACTER_PRESSED',
    payload: char,
});
