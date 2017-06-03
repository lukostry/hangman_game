import React, { Component }  from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Hangman from '../components/hangman';
import MissedWords from '../components/missed-words';
import GameOver from '../components/game-over';
import GuessedWords from '../components/guessed-words';
import game from './game.css';

class Game extends Component {

    componentDidMount () {
        this.props.fetchNewWord()
            .then(() => document.body.addEventListener('keydown', this.handleKeyStrokes));
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.isGameOver) {
            document.body.removeEventListener('keydown', this.handleKeyStrokes);
        }

        if (nextProps.isGameWon) {
            // I think we can dispatched as a part of fetchNewWord
            this.props.reloadGame();
            this.props.fetchNewWord();
        }
    }

    handleKeyStrokes = (e) => {
        console.log(e);
        // sanitaze char before passing to func
        const keyPressed = e.key.toUpperCase();
        this.props.pressCharacter(keyPressed);
        console.log(keyPressed);
    }

    render () {
        const { currentWord, isGameOver, levelOfTheGame, missedWords } = this.props;

        return (
            <div className="game-container">
                {isGameOver && <GameOver />}
                <div
                    className="inner-container"
                    style={{opacity: isGameOver ? '0.2' : '1'}}
                >
                    <Hangman levelOfTheGame={levelOfTheGame} />
                    <MissedWords
                        missedWords={missedWords}
                    />
                    <GuessedWords
                        currentWord={currentWord}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isGameOver: state.levelOfTheGame === 11,
    isGameWon: state.currentWord.every(obj => obj.wasGuessed),
    currentWord: state.currentWord,
    levelOfTheGame: state.levelOfTheGame,
    missedWords: state.missedWords,
});

export default connect(mapStateToProps, actions)(Game);
