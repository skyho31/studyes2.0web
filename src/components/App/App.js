import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

// 외부 components 
import Header from '../Header/Header';
import Home from '../Home/Home';

class App extends Component {

	render(){
		return(
			<Router>
				<div >
					<Header />
					<Route exact path="/" component={Home} />
				</div>
			</Router>
		)
	}
}


function mapStateToProps(state){
	return {
		dummy:state.dummy
	}
}

export default connect(mapStateToProps)(App);
