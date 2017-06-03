import fetch from 'isomorphic-fetch';
import { v4 } from 'uuid';

const BASE_URL = 'http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

export const fetchNewWord = () => dispatch =>
    fetch(BASE_URL)
        .then(response => response.json())
        .then((json) => {
            const wordConvertedToArr = json.word.toUpperCase().split('');

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
