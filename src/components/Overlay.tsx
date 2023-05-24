import React from "react";
import "../styles/components/Overlay.css";
import PageLink from "./PageLink";

interface IOverlay {
	open: boolean,
	setOpen: (open: boolean) => void,
	darkMode: boolean,
}

function Overlay(props: IOverlay) {
	function closeOverlay() {
		props.setOpen(false);
		document.getElementsByTagName("body")[0]!.style.overflow = "auto";
	}

	return (
		<div
			onClick={closeOverlay}
			className={`overlay ${props.open ? "show-overlay" : "hide-overlay"}`}
		>
			<PageLink link="home" className={`overlay-link  ${props.darkMode ? "dark-mode-text" : "light-mode-text"}`} />
			<PageLink link="education" className={`overlay-link  ${props.darkMode ? "dark-mode-text" : "light-mode-text"}`} />
			<PageLink link="experience" className={`overlay-link  ${props.darkMode ? "dark-mode-text" : "light-mode-text"}`} />
			<PageLink link="skills" className={`overlay-link  ${props.darkMode ? "dark-mode-text" : "light-mode-text"}`} />
			<PageLink link="contact" className={`overlay-link  ${props.darkMode ? "dark-mode-text" : "light-mode-text"}`} />
		</div>
	);
}

export default Overlay;