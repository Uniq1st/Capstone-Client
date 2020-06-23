import React from "react";
import { Redirect } from "react-router-dom";



class Logins extends React.Component {
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

		if (this.props.handleSubmit(username, password)) {
			this.setState({
				username: "",
				password: ""
			});
		} else {
			// only reset password
			this.setState({
				password: ""
			});
		}
	};

	handleLog = () => {
		this.setState({redirect: true});
	}

	render() {
		const { username, password } = this.state;
		const loggedIn = (this.props.loggedIn);

		const legendStyling = {
			textAlign: "center"
		};

		const inputStyling = {
			display: "block",
			margin: "20px auto",
			border: "#8888FF solid 1px",
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
			border: "#BCBCBC solid 1px",
			borderRadius: "5px",
			padding: "8px 20px",
			backgroundColor: "#EEFFEE",
			fontSize: "1em",
			color: "#454545"
		};

		const formStyling = {
			margin: "30px auto",
			border: "#FFAAAA solid 1px",
			borderRadius: "4px",
			padding: "20px 0px",
			width: "200px",
			backgroundColor: "#AAAAFF",
		};

		if(this.state.redirect) {
			return (
				<Redirect to="/"/>
			)
		}

		if (!loggedIn) {
			return (
				<form style={formStyling} onSubmit={this.handleSubmit}>
					<legend style={legendStyling}>Login</legend>

					<label htmlFor="l-username">
						<input type="text" name="username" value={username} placeholder="Username" style={inputStyling} onChange={this.handleChange} />
					</label>

					<label htmlFor="l-password">
						<input type="password" name="password" value={password} placeholder="Password" style={inputStyling} onChange={this.handleChange} />
					</label>

					<input type="submit" value="Login" style={submitStyling} />
				</form>
			);
		} else {
			const { password, username } = this.props.currentUser;

			const containerStyling = {
				margin: "30px 20%",
				border: "#FF7700 solid 1px",
				borderRadius: "6px",
				textAlign: "center"
			};

			return (
				<div style={containerStyling}>
					<h2>Welcome Back</h2>
					<div>
						<p>Your username is: { username }</p>
						<p>Your password is: { password }</p>
					</div>
					<button style={submitStyling} onClick={this.handleLog}>Logout</button>
				</div>
			);
		}
	};
};







export default Logins;