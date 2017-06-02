import React, { Component }  from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import WordContainer from '../components/word-container';

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
        const { currentWord, isGameOver } = this.props;

        return (
            <div
                className="app-container"
            >
                {isGameOver &&
                ''}
                <WordContainer
                    currentWord={currentWord}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    // isGameOver - selector
    // isGameWon - selector
    currentWord: state.currentWord,
    levelOfTheGame: state.levelOfTheGame,
    missedWords: state.missedWords,
});

export default connect(mapStateToProps, actions)(Game);
