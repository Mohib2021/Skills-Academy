import React from "react";
// importing and initializing AOS to apply animation
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
	offset: 250,
	delay: 0.5,
	duration: 1000,
});
function TopService(props) {
	// destructuring data
	const { title, img, instructor, level, teachingDay, teachingTime } =
		props.service;
	// declaring an object of style
	const shadow = {
		boxShadow: "7px 7px 10px black",
	};
	return (
		<div className="col-md-4 col-sm-6 col-12">
			<div
				style={shadow}
				className="bg-dark text-white p-3 rounded"
				data-aos="fade-up"
			>
				<img className="img-fluid rounded" src={img} alt="img of the service" />
				<div className="my-3">
					<h5>Title : {title}</h5>
					<h6 className="my-3">Instructor : {instructor}</h6>
					<p>
						<b>Level</b> : {level}
					</p>
					<p>
						<b>Teaching Day</b> : {teachingDay}
					</p>
					<p>
						<b>Teaching Time</b> : {teachingTime}
					</p>
				</div>
				<button className="btn btn-outline-secondary">
					Achieve This Skill
				</button>
			</div>
		</div>
	);
}

export default TopService;
