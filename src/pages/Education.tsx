import React from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/pages/Education.css";
import Line from "../components/Line";
import { IDarkModeState } from "./App";
import jsonData from "../data.json";

interface IDegree {
	degree: string,
	years: string,
	comments: string,
}

function Degree(props: IDegree) {
	return (
		<div className="degree-info-container">
			<div className="degree-info">
				<h3 className="degree">{props.degree}</h3>
				<h3 className="degree-year">{props.years}</h3>
			</div>
			<p className="degree-comments">{props.comments}</p>
		</div>
	);
}

function Education(props: IDarkModeState) {
	const educationData = JSON.parse(JSON.stringify(jsonData)).education;
	return (
		<div className={`page-container main-padding ${props.darkMode ? "dark-mode" : "light-mode"}`}>
			<div className="page-title">Education</div>
			<Line darkMode={props.darkMode} />
			<div>
				{educationData.map((inst: any) => {
					return <>
						<h2 className="institution-name">{inst.institution}</h2>
						{inst.degrees.map((deg: any) => {
							return <Degree
								key={uuidv4()}
								degree={deg.degree}
								years={deg.years}
								comments={deg.comments}
							/>;
						})}
						<Line className="margin-bottom" darkMode={props.darkMode} />
					</>;
				})}
			</div>
		</div>
	);
}

export default Education;