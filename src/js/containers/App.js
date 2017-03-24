import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

	renderDummy(){
		return this.props.dummy.map((data,i) => {
			return (
					<div key={i}>{data.name} / {data.id} </div>
			)
		})
	}

  	render() {
    	return (
      		<div className="App">  
          		Its Dummy Reducer
          		{this.renderDummy()}
      		</div>
    	);
  	}
}

function mapStateToProps(state){
	return {
		dummy:state.dummy
	}
}

export default connect(mapStateToProps)(App);
