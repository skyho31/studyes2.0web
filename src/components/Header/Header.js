import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {

	constructor(props){
		super(props);
		this.state = {
			isOpenedMenu : false
		}
	}

	render(){
		return(
			<header>
				<Link to="/"><h1 id="logo">studyes</h1></Link>

				<nav>
					<ul>
						<Link to="/contest"><li>공모전</li></Link>
						<Link to="/getjob"><li>취업스터디</li></Link>
						<Link to="/language"><li>외국어</li></Link>
						<Link to="/exam"><li>고시</li></Link>
					</ul>
					<SearchBar />
				</nav>
				
			</header>
		)
	}
}

class SearchBar extends Component {
	render(){
		return(
			<div className="searchBar">
				<form>
					<input type="text" placeholder="검색"/>
				</form>
			</div>
		)
	}
}

export default Header;

/* button backup
*				<div className="menuButton">
*					<span id="menuButton" onClick={()=>console.log('a')}></span>
*				</div>
*
*/