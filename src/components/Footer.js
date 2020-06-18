import React, { Component } from "react";

const Footer = (props) => {

	const { author, rights, year } = props.creation;

	const footerStyling = {
		marginTop: "10px",
		// padding: "80px 10px",
		// backgroundColor: "#FAFAFA",
		// textAlign: "center",
		// color: "#767676"
	};

	return (
		<footer style={footerStyling}>
			{/* <p>&copy; {year} {author} | {rights}</p> */}
		</footer>
	);
};

export default Footer;