import React from "react";
import ShowServices from "../ShowServices/ShowServices";

function Home(props) {
	const { services } = props;
	const topServices = services.slice(0, 3);

	return (
		<div className="container my-4">
			<h4 className="text-center mb-3">Top of the Services </h4>
			<div className="row g-4">
				{topServices.map((service) => (
					<ShowServices key={service.id} service={service} />
				))}
			</div>
		</div>
	);
}

export default Home;
