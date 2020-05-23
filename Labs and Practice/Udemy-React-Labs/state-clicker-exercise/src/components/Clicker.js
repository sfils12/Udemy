import React, { Component } from 'react';

class Clicker extends Component {
	constructor(props) {
		super(props);
		this.state = { num: 1 };
		//binding not required becuase I used ES6 syntax for genRandom function
	}

	genRandom = () => {
		//pick a random number between 1-10
		let randomNum = Math.floor(Math.random() * 10) + 1;
		//update state
		this.setState({ num: randomNum });
	};

	render() {
		return (
			<div>
				<h1> Number is: {this.state.num}</h1>
				{this.state.num === 7 ? (
					<h2>You Win!!</h2>
				) : (
					<button onClick={this.genRandom}>Generate Random Number</button>
				)}
			</div>
		);
	}
}

export default Clicker;
