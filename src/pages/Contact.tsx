import React from "react";
import "../styles/pages/Contact.css";
import Line from "../components/Line";
import { IDarkModeState } from "./App";

function Contact(props: IDarkModeState) {
	return (
		<div className={`page-container main-padding ${props.darkMode ? "dark-mode" : "light-mode"}`}>
			<div className="page-title">Contact</div>
			<Line className="margin-bottom" darkMode={props.darkMode} />
			<div>
				<p>Feel free to reach out to me via LinkedIn or GitHub.</p>
			</div>
		</div>
	);
}

export default Contact;