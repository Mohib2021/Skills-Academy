import React from "react";
// importing and init AOS
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
	offset: 250,
	delay: 0.5,
	duration: 1000,
});
function Contact(props) {
	const { contact } = props;
	// destructuring data
	const { img, name, category, phone } = contact;
	const shadow = {
		boxShadow: "7px 7px 10px black",
	};
	return (
		<div className="col-md-4 col-sm-6 col-12">
			<div
				data-aos="fade-up-right"
				style={shadow}
				className="p-3 bg-dark text-white rounded"
			>
				<img
					className="img-fluid rounded"
					src={img}
					alt="Helper and Supporter"
				/>
				<h5 className="my-3">Name : {name}</h5>
				<p>
					<b>Category</b> : {category}
				</p>
				<p>
					<b>Phone</b> : {phone}
				</p>
			</div>
		</div>
	);
}

export default Contact;
