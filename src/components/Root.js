import React from 'react';
import { Provider } from 'react-redux';
import Game from '../containers/game';

function Root({ store }) {
    return (
        <Provider store={store}>
            <Game />
        </Provider>
    );
}

export default Root;
