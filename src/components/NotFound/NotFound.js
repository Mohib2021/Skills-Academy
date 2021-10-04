import React from "react";

function NotFound() {
	// declaring object of style
	const styles = {
		height: "90vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	};
	return (
		<div style={styles} className="bg-secondary text-white">
			<div className="text-center">
				<h1>404</h1>
				<h3>Opsssss! Page not found.</h3>
			</div>
		</div>
	);
}

export default NotFound;
