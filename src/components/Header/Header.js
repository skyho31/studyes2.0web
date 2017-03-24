import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {

	render(){
		return(
			<header>
				<Link to="/"><h1 id="logo">studyes</h1></Link>
				<nav>
					<ul>
						<Link to="/all"><li>All</li></Link>
						<Link to="/contest"><li>공모전</li></Link>
						<Link to="/getjob"><li>취업스터디</li></Link>
						<Link to="/language"><li>외국어</li></Link>
						<Link to="/exam"><li>고시</li></Link>
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