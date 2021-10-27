import React from "react";

function Carousal() {
	return (
		<div>
			<div
				id="carouselExampleControls"
				className="carousel slide"
				data-bs-ride="carousel"
			>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src="https://images.pexels.com/photos/7683732/pexels-photo-7683732.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							className="d-block w-100"
							alt="..."
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							className="d-block w-100"
							alt="..."
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://images.pexels.com/photos/5940827/pexels-photo-5940827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							className="d-block w-100"
							alt="..."
						/>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
}

export default Carousal;
