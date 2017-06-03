import React from 'react';
import theme from './theme.css';

function MissedWords ({ missedWords }) {
    return (
        <section className="missed-word-container">
            <h1>You missed:</h1>
            <div>
                {missedWords.map((word, index) =>
                    <span
                        className="missed-word"
                        key={index}
                    >
                        {word}
                    </span>
                )}
            </div>
        </section>
    );
}

export default MissedWords;
