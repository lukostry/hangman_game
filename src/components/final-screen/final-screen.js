import React from 'react';
import './final-screen.css';

function FinalScreen ({
    isGameOver,
    onNewWordRequest
}) {
    return (
        <div className="final-screen-overlay">
            <div><span>{isGameOver ? 'Game over' : 'You won!'}</span></div>
            <button onClick={onNewWordRequest}>New word</button>
        </div>
    );
}

export default FinalScreen;
