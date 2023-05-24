import React from "react";
import "../styles/components/Line.css";

interface ILine {
	className?: string,
	darkMode: boolean,
}

function Line(props: ILine) {
	return (
		<div className={`line ${props.className ?? ""} ${props.darkMode ? "dark-mode-line" : "light-mode-line"}`} />
	);
}

export default Line;