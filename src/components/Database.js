import React from "react";


const Database = (props) => {
	const tableStyling = {
		margin: "30px auto",
		border: "#000000 solid 1px",
		borderCollapse: "collapse",
		borderRadius: "4px",
		width: "95%",
		textAlign: "center"
	};

	const rowStyling = {
		border: "#000000 solid 1px"
	};

	const cellStyling = {
		border: "#000000 solid 1px",
		padding: "15px 10px"
	};

	const deleteStyling = {
		border: "#4682B4 solid 2px",
		borderRadius: "3px",
		padding: "10px 25px",
		backgroundColor: "#AA55AA",
		fontSize: "1em",
		color: "#FFFFFF"
	};

	const users = props.users.map((user, index) => {
		return (
			<tr key={index} style={rowStyling}>
				<td style={cellStyling}>{user.username}</td>
				<td style={cellStyling}>{user.password}</td>
				<td style={cellStyling}><button style={deleteStyling} onClick={() => {
					props.handleDelete(index);
				}}>Delete</button></td>
			</tr>
		);
	});

	return (
		<table style={tableStyling}>
			<thead>
				<tr style={rowStyling}>
					<td style={cellStyling}>Username</td>
					<td style={cellStyling}>Password</td>
					<td style={cellStyling}>Delete</td>
				</tr>
			</thead>
			<tbody>
				{ users }
			</tbody>
			<tfoot>
				<tr style={rowStyling}>
					<td colSpan="3" style={cellStyling}>This table is rendered using ReactJS</td>
				</tr>
			</tfoot>
		</table>
	);
};

export default Database;