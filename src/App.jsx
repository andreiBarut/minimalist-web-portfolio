import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App bg-neutral-50">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
