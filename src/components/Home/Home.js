import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
	render(){
		return(
			<section>
				<Welcome />
			</section>
		)
	}
}

class Welcome extends Component {
	render(){
		return(
			<article className="welcomeContainer">
				<div className="wrapper whiteCover">
					<div className="welcomeFrame">
						<div className="welcomeText">
							<h2>스터디스에 오신 것을 환영합니다</h2>
							<h5>스터디스는 사용자의 목적에 맞게 손쉽게 스터디를 형성하고 원하는 목표를 달성하는데 도움이 됩니다. <br/>
								지금 바로 여러분의 동료를 찾아주세요.
							</h5>
						</div>
						<button className="welcomeButton"><Link to="/start">바로 시작하기</Link></button>
					</div>
				</div>
			</article>
		)
	}
}

export default Home;