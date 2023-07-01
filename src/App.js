import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Pricing from "./components/Pricing";

function App() {
	return (
		<>
			<Nav />
			<About />
			<Skills />
			<Portfolio />
			<Pricing />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
