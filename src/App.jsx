import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Hi from "./components/Hi";
import { Fade, Zoom, Reveal, Flip, Slide } from "react-awesome-reveal";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App bg-zinc-50">
			<Hi />

			<div className="app-content-container">
				<Navbar />
				<Slide direction="left" delay={0} damping={0}>
					<Home />
				</Slide>
				<Slide direction="right" delay={0} damping={0}>
					<About />
				</Slide>
				<Slide direction="left" delay={0}>
					<Projects />
				</Slide>
			</div>
		</div>
	);
}

export default App;
