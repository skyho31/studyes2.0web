import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './Study.css';

import Join from '../Join/Join';

class Study extends Component {

	constructor(props){
		super(props);
		this.state = {
			data : this.props.location.state.data,
		};
	}

	_renderDescription(){
		return { __html:this.state.data.description}

	}

	_openjoinMenu(){
		this.setState({
			isJoined:true
		})
	}

	render(){

		console.log(this.props)

		const style = {
				"backgroundImage":'url(' + this.state.data.img + ')'
		}

		const nextUrl = '/join' + this.props.location.search;

		return(
			<article>
			<section className="welcomeContainer"  style={style}>
				<div className="wrapper whiteCover">
					<div className="frame">
						<div className="welcomeText">
							<h2>{this.state.data.name}</h2>
							<h5>{this.state.data.category}<br/>
								{this.state.data.member}
							</h5>
						</div>

						<Link to={nextUrl}>
							<button className="welcomeButton join">스터디 참가하기</button>
						</Link>
					</div>
				</div>
			</section>
			<section className="StudyListContainer">
				<div dangerouslySetInnerHTML={ this._renderDescription() } className="frame"/>
				<Route path={nextUrl} component={Join} />
			</section>
			</article>
		)
	}
}


export default Study;
