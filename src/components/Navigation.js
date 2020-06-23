import React, { Component } from "react";



const Navigation = (props) => {
	const ulStyling = {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",

		margin: 0,
		padding: 0,
		borderBottom: "#775577 solid 1px",
		listStyleType: "none",
		backgroundColor: "#DDAADD",
		textAlign: "center",
	};

	const liStyling = {
		flex: 1,

		borderRight: "#775577 solid 1px",
		padding: "10px 0",
		textAlign: "center"
	};

	const navigationItems = props.tabs.map((tab, index) => {
		return (
			<li key={index} className={tab.toLowerCase()} style={liStyling} onClick={() => {
				props.handleChange(tab);
			}}>{tab}</li>
		);
	});

	return (
		<ul style={ulStyling}>
			{ navigationItems }
		</ul>
	);
};



export default Navigation;
