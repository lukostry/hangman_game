import React from 'react';

function WordContainer ({ currentWord }) {
    return (
        <ul>
            {currentWord.map((obj) => {
                if (obj.wasGuessed) {
                    return <li key={obj.id}>{obj.char}</li>;
                }

                return <li key={obj.id}>[X]</li>;
            }
            )}
        </ul>
    );
}

export default WordContainer;
