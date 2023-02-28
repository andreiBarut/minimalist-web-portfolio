import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Hi from "./components/Hi";
import Footer from "./pages/Footer";
import { Fade, Zoom, Reveal, Flip, Slide } from "react-awesome-reveal";
import Aos from "aos";
function App() {
	Aos.init();
	return (
		<div className="App bg-zinc-50 dark:bg-zinc-800">
			{/* <Hi /> */}

			<div className="app-content-container">
				<Navbar />
				{/* <Reveal delay={0} damping={0}> */}
				<Home />
				{/* </Reveal> */}
				{/* <Reveal delay={0} damping={0}> */}
				<About />
				{/* </Reveal> */}
				{/* <Reveal delay={0}> */}
				<Projects />
				{/* </Reveal> */}
				<Footer />
			</div>
		</div>
	);
}

export default App;
