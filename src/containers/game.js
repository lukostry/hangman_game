import React, { Component }  from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as selectors from '../selectors';
import FinalScreen from '../components/final-screen/final-screen';
import GuessedChars from '../components/guessed-chars/guessed-chars';
import Hangman from '../components/hangman/hangman';
import MissedChars from '../components/missed-chars/missed-chars';
import './game.css';

class Game extends Component {

    componentDidMount () {
        this.props.fetchNewWord()
            .then(() => document.body.addEventListener('keydown', this.handleKeyStrokes));
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.isGameOver || nextProps.isGameWon) {
            document.body.removeEventListener('keydown', this.handleKeyStrokes);
        }
    }

    handleKeyStrokes = (e) => {
        const keyPressed = e.key.toUpperCase();

        // Ignore `special` keys like ctrl, shift etc.
        // Maybe user tries to input capital letter - that should be allowed.
        if (keyPressed.length > 1) {
            return;
        }

        this.props.pressCharacter(keyPressed);
    }

    handleNewWordRequest = () => {
        this.props.fetchNewWord()
            .then(() => document.body.addEventListener('keydown', this.handleKeyStrokes));
    }

    render () {
        const {
            currentWord,
            isGameOver,
            isGameWon,
            levelOfTheGame,
            missedChars,
            wasMissed,
        } = this.props;

        return (
            <div className="game-container">
                {(isGameOver || isGameWon) &&
                    <FinalScreen
                        isGameOver={isGameOver}
                        onNewWordRequest={this.handleNewWordRequest}
                    />
                }
                <div
                    className="inner-container"
                    style={{opacity: (isGameOver || isGameWon) ? '0.2' : '1'}}
                >
                    <Hangman levelOfTheGame={levelOfTheGame} />
                    <MissedChars
                        missedChars={missedChars}
                        wasMissed={wasMissed}
                    />
                    <GuessedChars currentWord={currentWord} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentWord: state.currentWord,
    isGameOver: selectors.getIsGameOver(state),
    isGameWon: selectors.getIsGameWon(state),
    levelOfTheGame: state.levelOfTheGame,
    missedChars: state.missedChars,
    wasMissed: selectors.getWasMissed(state),
});

export default connect(mapStateToProps, actions)(Game);
