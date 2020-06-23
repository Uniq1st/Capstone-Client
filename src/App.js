import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logins from "./components/Logins";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Upcoming from "./components/Upcoming";
import Search from "./components/Search";
import Genre from "./components/Genre";
import Anime from "./components/Anime";
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
		const HomeComponent = () => (<Home/>);
		const UpcomingComponent = () => (<Upcoming/>);
		const SearchComponent = () => (<Search/>);
		const GenreComponent = () => (<Genre/>);
		const AnimeComponent = () => (<Anime/>);
		return (
			<div className="app">
				

				<Router>
					<nav>
						
						<Link className="linked" to="/"></Link>
						<Link className="upcoming"to="/upcoming"></Link>
						<Link className="genre" to="/genre"></Link>
						<Link className="search" to="/search"></Link>
						<Link className="signup" to="/signup"> </Link>
						<Link className="login" to="/login"> </Link>
						
					</nav>
					<Switch>
						<Route exact path="/signup" render={SignupComponent} />
						<Route exact path="/login" render={LoginComponent} />
						<Route exact path="/" render={HomeComponent} />
						<Route exact path="/upcoming" render={UpcomingComponent} />
						<Route exact path="/search" render={SearchComponent} />
						<Route exact path="/genre" render={GenreComponent} />
						<Route exact path="/anime/:id" render={AnimeComponent} />
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

