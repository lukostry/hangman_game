import React from 'react';
import { createEmptyPlaceholdersArray } from '../../utils';
import './guessed-chars.css';

function GuessedChars ({ currentWord }) {
    const placeholders = createEmptyPlaceholdersArray(currentWord);

    return (
        <section className="guessed-chars-container">
            {placeholders.map((item, index) => {
                return (
                    <div
                        className="empty-placeholder"
                        key={index}
                    />
                );
            })}
            {currentWord.map((obj) => {
                return (
                    <div
                        className="char-placeholder"
                        key={obj.id}
                    >
                        {obj.wasGuessed && obj.character}
                    </div>
                )
            })}
        </section>
    );
}

export default GuessedChars;
