import React from 'react';
import './hangman.css';

function Hangman ({ levelOfTheGame }) {
    return (
        <section className="hangman">
            <div className="bar" />
            {levelOfTheGame > 0 && <div className="head" />}
            {levelOfTheGame > 1 && <div className="neck" />}
            {levelOfTheGame > 2 && <div className="corpus" />}
            {levelOfTheGame > 3 && <div className="right-arm" />}
            {levelOfTheGame > 4 && <div className="left-arm" />}
            {levelOfTheGame > 5 && <div className="right-hand" />}
            {levelOfTheGame > 6 && <div className="left-hand" />}
            {levelOfTheGame > 7 && <div className="right-leg" />}
            {levelOfTheGame > 8 && <div className="left-leg" />}
            {levelOfTheGame > 9 && <div className="right-foot" />}
            {levelOfTheGame > 10 && <div className="left-foot" />}
        </section>
    );
}

export default Hangman;
