import React from 'react';
import fill from 'lodash/fill';

const MAX_LENGTH_OF_WORD = 10;

function GuessedWords ({ currentWord }) {
    const numberOfPlaceholders = MAX_LENGTH_OF_WORD - currentWord.length;
    const placeholders = fill(Array(numberOfPlaceholders), null);
    console.log(placeholders);

    return (
        <section className="guessed-word-container">
            {placeholders.map((item, index) => {
                return <div className="empty-placeholder" key={index}></div>
            })}
            {currentWord.map((obj, index) => {
                return <div className="char-placeholder" key={index}>{obj.wasGuessed && obj.character}</div>
            })}
        </section>
    );
}

export default GuessedWords;
