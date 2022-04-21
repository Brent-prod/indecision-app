class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);
		this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
		this.state = {
			visibility: false
		};
	}

	handleToggleVisibility() {
		this.setState((prevState) => {
			return {
				visibility: !prevState.visibility
			};
		});
	}
	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.handleToggleVisibility}>
					{this.state.visibility ? 'Hide details' : 'Show details'}
				</button>
				{/* <p>{visibility ? 'Here are your details' : ''}</p>  */}
				{/* this is an option that will work but below there is a logical AND operator example */}
				{this.state.visibility && (
					<div>
						<p>Hey. These are some details you can now see!</p>
					</div>
				)}
			</div>
		);
	}
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visibility = false; // this is the default value to start

// const toggleVisibility = () => {
// 	visibility = !visibility; // here we cannot put true or false otherwise it will not keep flipping but need to use ! in front of the variable to keep flipping the value

// 	render();
// };

// const render = () => {
// 	const jsx = (
// 		<div>
// 			<h1>Visibility Toggle</h1>
// 			<button onClick={toggleVisibility}>{visibility ? 'Hide details' : 'Show details'}</button>
// 			{/* <p>{visibility ? 'Here are your details' : ''}</p>  */}
// 			{/* this is an option that will work but below there is a logical AND operator example */}
// 			{visibility && (
// 				<div>
// 					<p>Hey. These are some details you can now see!</p>
// 				</div>
// 			)}
// 		</div>
// 	);

// 	ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();

// // clickkable button - on click function to reveal the hidden text
// // button text to change when clicked
// // keep track whether or not the toggle is open or closed
// // and render correctly
// // setup the button to have a onClick handler that is gonna toggle that boolean value

// // use a ternary operator to determine the button text "show details" ? "show details" : "hide details"
