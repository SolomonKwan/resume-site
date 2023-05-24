import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import "../styles/pages/PageTemplate.css";
import Hamburger from "../components/Hamburger";
import Overlay from "../components/Overlay";
import { IDarkMode } from "./App";

interface IWiggleIcon {
	children: React.ReactElement
}

const WiggleIcon = ({ children }: IWiggleIcon) =>
	<div className="wiggle-icon">
		{children}
	</div>;

function PageTemplate(props: IDarkMode) {
	const [showOverlay, setShowOverlay] = useState(false);

	function toggleOverlay() {
		setShowOverlay(!showOverlay);
		if (showOverlay)
			document.getElementsByTagName("body")[0]!.style.overflow = "auto";
		else
			document.getElementsByTagName("body")[0]!.style.overflow = "hidden";
	}

	return (
		<div className={`container ${props.darkMode ? "dark-mode" : "light-mode"}`}>
			<div className="overlay-side-elements">
				<WiggleIcon>
					<Hamburger
						open={showOverlay}
						setOpen={toggleOverlay}
						darkMode={props.darkMode}
					/>
				</WiggleIcon>
				<WiggleIcon>
					<DarkModeSwitch
						style={{ WebkitTapHighlightColor: "transparent" }}
						checked={props.darkMode}
						onChange={() => props.setDarkMode(!props.darkMode)}
						size={40}
					/>
				</WiggleIcon>
			</div>
			<Overlay open={showOverlay} setOpen={setShowOverlay} darkMode={props.darkMode} />
			<Outlet />
		</div>
	);
}

export default PageTemplate;