import React from "react";
import ShowServices from "../ShowServices/ShowServices";
function Services(props) {
	const { services } = props;
	return (
		<div className="container my-4">
			<h4 className="text-center mb-3">All of The Services</h4>
			<div className="row g-4">
				{services.map((service) => (
					<ShowServices key={service.id} service={service} />
				))}
			</div>
		</div>
	);
}

export default Services;
