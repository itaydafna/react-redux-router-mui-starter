import React, { Component } from "react";
import { Link } from 'react-router'
import { connect } from "react-redux";
import Paper from 'material-ui/Paper';
import './app.css'



class App extends Component {
	state = {

	};


	render() {
		const style = {
			paper: {
				height: 250,
				width: 250
			}
		}
		return (<Paper className="container" style={style.paper}>
			<h1 className="hello-world">Hello World</h1>
			<div>
				{this.props.children}
			</div>
			<nav><Link to='/home'>Home</Link><Link to='/away' >Away</Link></nav>
		</Paper>);
	}
}

const mapStateToProps = state => ({
	//prop: state.prop
});

export default connect(mapStateToProps, {
	// ...actions
})(App);
