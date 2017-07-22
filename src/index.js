import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './containers/App/index.js';
import registerServiceWorker from './registerServiceWorker';

import configure from './store'

const store = configure()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root'));
registerServiceWorker();
