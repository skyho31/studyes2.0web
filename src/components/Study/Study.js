import React, { Component } from 'react';
import './Study.css';

class Study extends Component {

	constructor(props){
		super(props);
		this.state = {
			data : this.props.location.state.data
		};
	}

	_renderDescription(){
		return { __html:this.state.data.description}

	}

	render(){

		console.log(this.state)

		const style = {
				"backgroundImage":'url(' + this.state.data.img + ')'
			}

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
						<button className="welcomeButton join">
							스터디 참가하기
						</button>
					</div>
				</div>
			</section>
			<section className="StudyListContainer">
				<div dangerouslySetInnerHTML={ this._renderDescription() } className="frame">
				</div>
			</section>
			</article>
		)
	}
}


export default Study;
