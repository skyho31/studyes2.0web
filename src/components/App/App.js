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
import Study from '../Study/Study';
import ErrorPage from '../ErrorPage/ErrorPage'
class App extends Component {

	render(){
		return(
			<Router>
				<div >
					<Header />
					<Route exact path="/" component={Home} />
					<Route path="/study" component={Study} />
					<Route path="/contest" component={ErrorPage} />
					<Route path="/getjob" component={ErrorPage} />
					<Route path="/language" component={ErrorPage} />
					<Route path="/exam" component={ErrorPage} />
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
