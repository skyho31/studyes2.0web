import React, { Component } from 'react';

//redux 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../actions/index';

//react-router
import { Link } from 'react-router-dom'

//css
import './Home.css';
import dummyImg from '../../img/welcome.jpg';

class Home extends Component {
	render(){
		return(
			<section>
				<Welcome login={this.props.login} isLogged={this.props.loginState}/>
				<StudyList />
			</section>
		)
	}
}

class Welcome extends Component {

	render(){
		return(
			<article className="welcomeContainer">
				<div className="wrapper whiteCover">
					<div className="frame">
						<div className="welcomeText">
							<h2>내가 만나는 첫 번째 스터디, 스터디스</h2>
							<h5>스터디스는 스터디의 진입장벽을 허물고, 자신에게 맞는 모집방법을 통해
								원하는 스터디를 손쉽게 결성하고 운영하는데 도움을 줍니다. <br/><br/>
								지금 바로 여러분의 동료를 찾아주세요.
							</h5>
						</div>
						{ !this.props.isLogged &&
							<button 
								className="welcomeButton" 
								onClick={()=>this.props.login()}>
								facebook으로 시작하기
							</button>
						}
					</div>
				</div>
			</article>
		)
	}
}

class StudyList extends Component {

	renderList(studyList, limit){

		return studyList.map((data,i) => {

			const style = {
				"backgroundImage":'url(' + data.img + ')'
			}

			return (
				<li className="studyListBox" key={i} style={style}>
					<div className="wrapper">
					<Link to={'/'+data.name}>
						<h2 className="studyTitle">{data.name}</h2>
						<div className="studyDescription">
							<h5 className="studyMember">필요인원 : {data.member}</h5>
							<h5 className="studyMember">{data.category}</h5>
						</div>
					</Link>
					</div>
				</li>
			)
		})
	}

	render(){
		return(
			<article className="StudyListContainer">
				<div className="frame">
					<h2 className="listTitle">최근 만들어진 스터디</h2>
					<ul className="studyList">
						{this.renderList(dummyList2)}
					</ul>
					<h2 className="listTitle">인기 스터디</h2>
					<ul className="studyList">
						{this.renderList(dummyList)}
					</ul>
				</div>
			</article>
		)
	}
}

const dummyList2 = [
	{
		name:"study1",
		category:"공모전",
		member:6,
		img:dummyImg
	},
	{
		name:"study2",
		category:"공모전",
		member:5,
		img:dummyImg
	},
	{
		name:"study3",
		category:"공모전",
		member:8,
		img:dummyImg
	},
	{
		name:"study4",
		category:"공모전",
		member:8,
		img:dummyImg
	},
	{
		name:"study5",
		category:"취업스터디",
		member:8,
		img:dummyImg
	},
	{
		name:"study6",
		category:"취업스터디",
		member:8,
		img:dummyImg
	}
]

const dummyList = [
	{
		name:"study1",
		category:"공모전",
		member:6,
		img:dummyImg
	},
	{
		name:"study2",
		category:"공모전",
		member:5,
		img:dummyImg
	},
	{
		name:"study3",
		category:"공모전",
		member:8,
		img:dummyImg
	},
	{
		name:"study4",
		category:"공모전",
		member:8,
		img:dummyImg
	},
	{
		name:"study5",
		category:"취업스터디",
		member:8,
		img:dummyImg
	},
	{
		name:"study6",
		category:"취업스터디",
		member:8,
		img:dummyImg
	},
	{
		name:"study7",
		category:"취업스터디",
		member:8,
		img:dummyImg
	},
	{
		name:"study8",
		category:"취업스터디",
		member:8,
		img:dummyImg
	},
	{
		name:"study9",
		category:"취업스터디",
		member:8,
		img:dummyImg
	}
]

function mapStateToProps(state){
    return {
        loginState: state.loginState
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({login: login}, dispatch);
};

export default connect(mapStateToProps,matchDispatchToProps)(Home);