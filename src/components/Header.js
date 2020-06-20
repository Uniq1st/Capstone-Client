import React, { Component } from "react";
import Navigation from "./Navigation"
const Header = (props) => {
	const tabs = ["Signup", "Login", "Database","jikanApi"];

	const headerStyling = {
		backgroundColor: "#AADDAA"
	};

	const headingStyling = {
		margin: 0,
		borderBottom: "#22AA22 solid 1px",
		padding: "8px 0px",
		textAlign: "center"
	};

	return (
		<header style={headerStyling}>
			<h1 style={headingStyling}>{props.name}</h1>
			<Navigation tabs={tabs} handleChange={props.handleChange}/>
		</header>
	);
};


export default Header;