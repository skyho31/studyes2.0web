import React from 'react';
import ReactDOM from 'react-dom';

// setting Redux 
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';

import allReducers from './reducers/index';

// components & containers
import App from './components/App/App';

const store = createStore(
	allReducers,
	applyMiddleware(logger, thunk)
);


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
 	document.getElementById('root')
);
