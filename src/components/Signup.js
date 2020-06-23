import React from "react";
import { Redirect } from "react-router-dom";

class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			redirect: false,
		};
	};

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();

		const { username, password } = this.state;

		if (username === "" || password === "") {
			console.log("fields must not be empty");
		} else if (username.indexOf(" ") !== -1 || password.indexOf(" ") !== -1) {
			console.log("fields mus not contain spaces")
		} else {
			this.props.handleSubmit(username, password);

			this.setState({
				username: "",
				password: "",
				redirect: true,
			});
		}
	};

	render() {
		const { username, password } = this.state;

		const legendStyling = {
			textAlign: "center"
		};

		const inputStyling = {
			display: "block",
			margin: "20px auto",
			border: "#AAAAFF solid 1px",
			borderRadius: "4px",
			width: "170px",
			height: "30px",
			textAlign: "center",
			fontFamily: "Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif",
			fontSize: "1em"
		};

		const submitStyling = {
			display: "block",
			margin: "20px auto",
			border: "#454545 solid 1px",
			borderRadius: "5px",
			padding: "8px 20px",
			backgroundColor: "#FF8888",
			fontSize: "1em",
			color: "#FFFFFF"
		};

		const formStyling = {
			margin: "30px auto",
			border: "#FFAAAA solid 1px",
			borderRadius: "4px",
			padding: "20px 0px",
			width: "200px",
			backgroundColor: "#EEFFEE",
		};

		if(this.state.redirect) {
			return (
				<Redirect to="/login"/>
			)
		}

		return (
			<form onSubmit={this.handleSubmit} style={formStyling}>
				<legend style={legendStyling}>Sign Up</legend>
				<label htmlFor="s-username">
					<input type="text" name="username" value={username} placeholder="Username" style={inputStyling} onChange={this.handleChange} />
				</label>

				<label htmlFor="s-password">
					<input type="password" name="password" value={password} placeholder="Password" style={inputStyling} onChange={this.handleChange} />
				</label>

				<input type="submit" value="Add User" style={submitStyling} />
			</form>
		);
	};
};
export default Signup;