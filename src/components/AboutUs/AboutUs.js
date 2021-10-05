import React from "react";
import ShowAboutUs from "../ShowAboutUs/ShowAboutUs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faUserGraduate,
	faUserTie,
} from "@fortawesome/free-solid-svg-icons";
// importing and initializing AOS to apply animation
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
	offset: 250,
	delay: 0.5,
	duration: 1000,
});
function AboutUs() {
	// declaring object of style
	const shadow = {
		boxShadow: "0px 0px 15px gray",
	};
	const academy = <FontAwesomeIcon icon={faHome} />;
	const instructor = <FontAwesomeIcon icon={faUserTie} />;
	const supporter = <FontAwesomeIcon icon={faUserGraduate} />;
	return (
		<div className="container my-4">
			<div className="row g-4 text-center">
				<ShowAboutUs>
					<div data-aos="fade-right" style={shadow} className="p-2 rounded">
						<div className="bg-dark text-white p-3 rounded">
							<h2>{academy}</h2>
							<h4>About Our Academy</h4>
						</div>

						<ul className="list-group list-group-flush">
							<h5 className="mt-3">Key Features :-</h5>
							<li className="list-group-item">
								Our office is in America at New York
							</li>
							<li className="list-group-item">It's an online based platform</li>
							<li className="list-group-item">We ensure everyday classes</li>
							<li className="list-group-item">
								We have over then thousand learner
							</li>
							<li className="list-group-item">Door is always open</li>
						</ul>
						<div className="text-start mt-3">
							<p>
								<b>Description : </b>
								This is a platform which is fully free to help the people to
								increase there soft as well as hard skills. According to your
								choice, you can achieve any skills form this platform.
							</p>
						</div>
					</div>
				</ShowAboutUs>
				<ShowAboutUs>
					<div data-aos="fade-up" style={shadow} className="p-2 rounded">
						<div className="bg-dark text-white p-3 rounded">
							<h2>{instructor}</h2>
							<h4>About Our Instructor</h4>
						</div>

						<ul className="list-group list-group-flush">
							<h5 className="mt-3">Key Features :-</h5>
							<li className="list-group-item">They all are friendly minded</li>
							<li className="list-group-item">They take class everyday</li>
							<li className="list-group-item">
								There goal is to make you perfect
							</li>
							<li className="list-group-item">
								They are more than fifty in count
							</li>
							<li className="list-group-item">They are extremely punctual</li>
						</ul>
						<div className="text-start mt-3">
							<p>
								<b>Description : </b>
								We have an amiable team of Instructors who are committed to help
								you each and every time so that you can be able to become one of
								the successful persons.
							</p>
						</div>
					</div>
				</ShowAboutUs>
				<ShowAboutUs>
					<div data-aos="fade-left" style={shadow} className="p-2 rounded">
						<div className="bg-dark text-white p-3 rounded">
							<h2>{supporter}</h2>
							<h4>About Our Supporter</h4>
						</div>

						<ul className="list-group list-group-flush">
							<h5 className="mt-3">Key Features :-</h5>
							<li className="list-group-item">
								All of our supporters are open minded
							</li>
							<li className="list-group-item">
								They take care of the learners everyday
							</li>
							<li className="list-group-item">
								Their goal is to help you every time
							</li>
							<li className="list-group-item">
								They are mote that hundred in count
							</li>
							<li className="list-group-item">They are always free</li>
						</ul>
						<div className="text-start mt-3">
							<p>
								<b>Description : </b>
								We have a large group of supporters whose job is to support and
								guide you to go through the path of perfect way and make you a
								knowledgeable person.
							</p>
						</div>
					</div>
				</ShowAboutUs>
			</div>
		</div>
	);
}

export default AboutUs;
