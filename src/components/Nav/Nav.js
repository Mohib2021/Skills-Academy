import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
function Nav() {
	const cap = <FontAwesomeIcon icon={faGraduationCap} />;
	return (
		<div className="sticky-top">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<Link to="/home" className="navbar-brand">
						<h4> {cap} Skill's Academy</h4>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
							<li className="nav-item">
								<Link
									className="nav-link active me-lg-3 me-md-0"
									aria-current="page"
									to="/home"
								>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/services" className="nav-link me-lg-3 me-md-0">
									Services
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/about" className="nav-link me-lg-3 me-md-0">
									About Us
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/contact" className="nav-link">
									Contact Us
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Nav;
