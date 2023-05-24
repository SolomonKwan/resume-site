import React from "react";
import "../styles/pages/PageNotFound.css";
import { IDarkModeState } from "./App";
import Line from "../components/Line";

function PageNotFound(props: IDarkModeState) {
	return (
		<div className={`page-container main-padding ${props.darkMode ? "dark-mode" : "light-mode"}`}>
			<h4 className="not-found-msg">THE PAGE YOU&apos;RE LOOKING FOR IS NOT FOUND</h4>
			<Line className="custom-margin-bottom" darkMode={props.darkMode} />
			<a href="/home" className="go-home">Go Home</a>
		</div>
	);
}

export default PageNotFound;