import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './configure-store';
import registerServiceWorker from './registerServiceWorker';
// import AllerDisplay from './fonts/AllerDisplay.ttf';
import './index.css';

const store = configureStore();

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
);
registerServiceWorker();
