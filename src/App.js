import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//importing bootstrap css and js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// importing components
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import NotFound from "./components/NotFound/NotFound";
import Services from "./components/Services/Services";

function App() {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch("/Services.json")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	return (
		// setting router
		<Router>
			<Nav />
			<Switch>
				<Route exact path="/">
					<Home services={services} />
				</Route>
				<Route path="/home">
					<Home services={services} />
				</Route>
				<Route path="/services">
					<Services services={services} />
				</Route>
				<Route path="/about">
					<AboutUs />
				</Route>
				<Route path="/contact">
					<ContactUs />
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
