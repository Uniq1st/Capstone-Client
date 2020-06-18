import React, { Component } from "react";
import ReactDOM from "react-dom";
import Logins from "./components/Logins";
import Signup from "./components/Signup";
import Database from "./components/Database";
import Footer from "./components/Footer";
import Header from "./components/Header";
import jikanApi from "./components/jikanApi"
import "./App.css";



class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			creation: {
				author: "Mehak Sadique",
				rights: "All Rights Reserved",
				year: (new Date()).getFullYear()
			},
			currentUser: {

			},
			loggedIn: false,
			name: "React Login",
			users: [],
			tab: "signUp"
		};
	};

	addUser = (username, password) => {
		let exists = false;
		this.state.users.forEach((user, index) => {
			if (username === user.username) {
				exists = true;
				return;
			}
		});

		if (!exists) {
			const users = this.state.users.concat([{
				username: username,
				password: password
			}]);

			this.setState({
				users: users
			});
		} else {
			console.log("user already exists");
		}
	};

	changeTab = (tab) => {
		this.setState({
			tab: tab
		});
	};

	deleteUser = (index) => {
		const users = this.state.users.filter((user, userIndex) => {
			return userIndex !== index;
		});

		this.setState({
			users: users
		});
	};

	handleLog = () => {
		const loggedIn = this.state.loggedIn;

		this.setState({
			loggedIn: !loggedIn
		});

		if (loggedIn) {
			this.setState({
				currentUser: {}
			});
		}
	};

	handleLogin = (username, password) => {
		const users = this.state.users;

		const login = users.filter((user, index) => {
			if (user.username === username && user.password === password) {
				return user;
			} else {
				return false;
			}
		});

		if (login.length !== 0) {
			this.setState({
				currentUser: login[0]
			});

			this.handleLog();
			return true;
		} else {
			return false;
		}
	};

	render() {
		const { creation, currentUser, loggedIn, name, users, tab } = this.state;
		const errorStyling = {
			padding: "100px 0",
			textAlign: "center",
			fontSize: "1.5em"
		};

		return (
			<div className="app">
				<Header name={name} handleChange={this.changeTab} />

				
				{ tab === "Signup" && <Signup handleSubmit={this.addUser} /> }
				{ tab === "Login" && <Logins loggedIn={loggedIn} currentUser={currentUser} handleSubmit={this.handleLogin} handleLog={this.handleLog} /> }
				{ tab === "Database" && <Database users={users} handleDelete={this.deleteUser} /> }
				{ tab === "Search" && <jikanApi/> }
				{ (tab !== "Signup" && tab !== "Login" && tab !== "Database" && tab!== "Search") && 
					<div>
						<p style={errorStyling}>Error: tab not recognised</p>
					</div>
				}
				<Footer creation={creation} />
			</div>
		);
	};
};

ReactDOM.render(
	<App />,
	document.getElementById("root")
);

export default App;

