import React from "react";

function ShowAboutUs(props) {
	return (
		<div className="col-md-4 col-sm-6 col-12">
			<div>{props.children}</div>
		</div>
	);
}

export default ShowAboutUs;
