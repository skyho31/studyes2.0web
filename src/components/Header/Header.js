import React, { Component } from 'react';
import './Header.css';

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
				<h1 id="logo">studyes</h1>
				<div className="menuButton">
					<span id="menuButton" onClick={()=>console.log('a')}></span>
				</div>
			</header>
		)
	}
}

export default Header;