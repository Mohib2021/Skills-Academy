import React, { useEffect, useState } from "react";
import Contact from "../Contact/Contact";

function ContactUs() {
	const [contacts, setContacts] = useState([]);
	useEffect(() => {
		fetch("/HelpAndSupport.json")
			.then((res) => res.json())
			.then((data) => setContacts(data));
	}, []);
	return (
		<div className="container my-4">
			<h4 className="text-center mb-3">
				Contact with our Instructor && Supporter
			</h4>
			<div className="row g-4">
				{contacts.map((contact) => (
					<Contact key={contact.id} contact={contact} />
				))}
			</div>
		</div>
	);
}

export default ContactUs;
