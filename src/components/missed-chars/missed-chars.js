import React from 'react';
import './missed-chars.css';

function MissedChars ({ missedChars, wasMissed }) {
    return (
        <section className="missed-chars-container">
            {wasMissed && <h1>You missed:</h1>}
            <div>
                {missedChars.map((word, index) =>
                    <span
                        className="missed-char"
                        key={index}
                    >
                        {word}
                    </span>
                )}
            </div>
        </section>
    );
}

export default MissedChars;
