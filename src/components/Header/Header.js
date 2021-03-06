import React, { Component } from 'react';
import './Header.css';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {

	render(){
		return(
			<header>
				<Link to="/"><h1 id="logo">studyes</h1></Link>
				<nav>
					<ul>
						<NavLink 
							to="/contest"
							activeClassName="selected">
							<li>공모전</li>
						</NavLink>
						<NavLink 
							to="/getjob"
							activeClassName="selected">
							<li>취업스터디</li>
						</NavLink>
						<NavLink 
							to="/language"
							activeClassName="selected">
							<li>외국어</li>
						</NavLink>
						<NavLink 
							to="/exam"
							activeClassName="selected">
							<li>고시</li>
						</NavLink>
						{
							this.props.isLogged &&
							<Link to="myTeam"><li>내 정보</li></Link>
						}
					</ul>

				</nav>
			</header>
		)
	}
}

function mapStateToProps(state){
	return {
		isLogged:state.loginState
	}
}


export default connect(mapStateToProps)(Header);

/*  backup
*				<div className="menuButton">
*					<span id="menuButton" onClick={()=>console.log('a')}></span>
*				</div>
*
*
*class SearchBar extends Component {
*	render(){
*		return(
*			<div className="searchBar">
*				<form>
*					<input type="text" placeholder="검색"/>
*				</form>
*			</div>
*		)
*	}
*}
*/