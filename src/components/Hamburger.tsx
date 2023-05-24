import React from "react";
import "../styles/components/Hamburger.css";

interface IHamburger {
	open: boolean,
	setOpen: (open: boolean) => void,
	darkMode: boolean,
}

function Hamburger(props: IHamburger) {
	return (
		<div
			id="hamburger"
			className={props.open ? "open" : ""}
			onClick={() => props.setOpen(!props.open)}
		>
			<span className={`${props.darkMode ? "dark-span" : "light-span"}`}></span>
			<span className={`${props.darkMode ? "dark-span" : "light-span"}`}></span>
			<span className={`${props.darkMode ? "dark-span" : "light-span"}`}></span>
			<span className={`${props.darkMode ? "dark-span" : "light-span"}`}></span>
		</div>
	);
}

export default Hamburger;