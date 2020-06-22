import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logins from "./components/Logins";
import Signup from "./components/Signup";
import Database from "./components/Database";

import Home from "./components/Home";
import Upcoming from "./components/Upcoming";
import Search from "./components/Search";
import Genre from "./components/Genre";
import "./App.css";

// import API from "./components/API"
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import jikanApi from "./components/jikanApi";


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
	searchBar = () => (
		
	<div>
		<input type='text' id='searchInput' />
		<button type='button' id='searchBtn'>Search</button>
	</div>
	)

	  
	

	render() {
		const { creation, currentUser, loggedIn, name, users, tab } = this.state;
		const errorStyling = {
			padding: "100px 0",
			textAlign: "center",
			fontSize: "1.5em"
		};
		const SignupComponent = () => (<Signup handleSubmit= {this.addUser}/>);
		const LoginComponent = () => (
		<Logins loggedIn={loggedIn} currentUser={currentUser} handleSubmit={this.handleLogin}/>);
		const DatabaseComponent = () => (<Database users={users} handleDelete={this.deleteUser}/>);
		const HomeComponent = () => (<Home/>);
		const UpcomingComponent = () => (<Upcoming/>);
		const SearchComponent = () => (<Search/>);
		const GenreComponent = () => (<Genre/>);
		return (
			<div className="app">
				{/* <Header name={name} handleChange={this.changeTab} />

				
				{ tab === "Signup" && <Signup handleSubmit={this.addUser} /> }
				{ tab === "Login" && <Logins loggedIn={loggedIn} currentUser={currentUser} handleSubmit={this.handleLogin} handleLog={this.handleLog} /> }
				{ tab === "Database" && <Database users={users} handleDelete={this.deleteUser} /> }
				{ tab === "jikanApi" && <jikanAPI /> }
		
				{ (tab !== "Signup" && tab !== "Login" && tab !== "Database" && tab!== "jikanApi") && 
					<div>
						<p style={errorStyling}>Error: tab not recognised</p>
					</div>
				}
				<Footer creation={creation} /> */}

				<Router>
					<nav>
						<Link to="/">Home</Link>
						<Link to="/upcoming">Upcoming Anime</Link>
						<Link to="/genre">Anime Genres</Link>
						<Link to="/search">Search</Link>
						<Link to="/signup"> Sign Up for Account</Link>
						<Link to="/login"> Login to Account</Link>
					</nav>
					<Switch>
						<Route exact path="/signup" render={SignupComponent} />
						<Route exact path="/login" render={LoginComponent} />
						<Route exact path="/" render={HomeComponent} />
						<Route exact path="/upcoming" render={UpcomingComponent} />
						<Route exact path="/search" render={SearchComponent} />
						<Route exact path="/genre" render={GenreComponent} />
					</Switch>
				</Router>
			</div>
		);
	};
};


ReactDOM.render(
	<App />,
	document.getElementById("root")
);


export default App;

