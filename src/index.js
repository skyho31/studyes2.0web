import React from 'react';
import ReactDOM from 'react-dom';

// setting Redux 
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import allReducers from './reducers/index';

//firebase
import * as firebase from 'firebase';

// components & containers
import App from './components/App/App';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBmiByYQQLYRu6-cFihJD6gHJsJM8anpJc",
    authDomain: "studyesclientweb.firebaseapp.com",
    databaseURL: "https://studyesclientweb.firebaseio.com",
    storageBucket: "studyesclientweb.appspot.com",
    messagingSenderId: "795426282175"
};

firebase.initializeApp(config);

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
