import React from 'react';

function GameOver () {
    return (
        <div className="game-over-overlay">
            <div><span>Game over</span></div>
            <button>New word</button>
        </div>
    );
}

export default GameOver;
