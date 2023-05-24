import React from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/pages/Experience.css";
import Line from "../components/Line";
import { IDarkModeState } from "./App";
import jsonData from "../data.json";

interface IExperience {
	role: string,
	years: string,
	comments: string[],
	technologies: string[],
}

function ExperienceRole(props: IExperience) {
	return (
		<div className="experience-info-container">
			<div className="experience-info">
				<h3 className="experience">{props.role}</h3>
				<h3 className="experience-year">{props.years}</h3>
			</div>
			<ul>
				{
					props.comments.map((com) => {
						return <li key={uuidv4()} className="experience-comments">{com}</li>;
					})
				}
			</ul>
			<div className="techs-used-container">
				{
					props.technologies.map((tech) => {
						try {
							// TODO fix
							// eslint-disable-next-line @typescript-eslint/no-var-requires
							const imgSrc = require(`../resources/${tech}.svg`);
							return <img key={uuidv4()} title={tech} src={imgSrc} width="25"/>;
						} catch (e) {
							return null;
						}
					})
				}
			</div>
		</div>
	);
}

function Experience(props: IDarkModeState) {
	const experienceData = JSON.parse(JSON.stringify(jsonData)).experience;
	return (
		<div className={`page-container main-padding ${props.darkMode ? "dark-mode" : "light-mode"}`}>
			<div className="page-title">Experience</div>
			<Line className="margin-bottom" darkMode={props.darkMode} />
			<div>
				{experienceData.map((org: any) => {
					return <>
						<h2>{org.organisation}</h2>
						{org.roles.map((role: any) => {
							return <ExperienceRole
								key={uuidv4()}
								role={role.role}
								years={role.years}
								comments={role.comments}
								technologies={role.technologies}
							/>;
						})}
						<Line className="margin-bottom" darkMode={props.darkMode} />
					</>;
				})}
			</div>
			<div className="attributions">
				<div className={`${props.darkMode ? "dark-mode" : "light-mode"}`}>
					SQL, Linux and Jest SVGs from <a
						className={`${props.darkMode ? "dark-mode" : "light-mode"}`}
						target="_"
						href="https://www.svgrepo.com"
					>
						www.svgrepo.com
					</a>
				</div>
				<div className={`${props.darkMode ? "dark-mode" : "light-mode"}`}>
					All other SVGs from <a
						className={`${props.darkMode ? "dark-mode" : "light-mode"}`}
						target="_"
						href="https://www.icons8.com"
					>
						www.icons8.com
					</a>
				</div>
			</div>
		</div>
	);
}

// linux icon from

export default Experience;