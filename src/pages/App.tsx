import React, { useState } from "react";
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";
import Home from "./Home";
import PageTemplate from "./PageTemplate";
import PageNotFound from "./PageNotFound";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Contact from "./Contact";
import "../styles/pages/common.css";

export interface IDarkMode {
	darkMode: boolean,
	setDarkMode: (open: boolean) => void,
}

export interface IDarkModeState {
	darkMode: boolean,
}

function App() {
	const [darkMode, setDarkMode] = useState(false);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<PageTemplate darkMode={darkMode} setDarkMode={setDarkMode} />}>
					<Route index element={<Home darkMode={darkMode} />} />
					<Route path="home" element={<Home darkMode={darkMode} />} />
					<Route path="education" element={<Education darkMode={darkMode} />} />
					<Route path="experience" element={<Experience darkMode={darkMode} />} />
					<Route path="skills" element={<Skills darkMode={darkMode} />} />
					<Route path="contact" element={<Contact darkMode={darkMode}/>} />
					<Route path="*" element={<PageNotFound darkMode={darkMode} />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
