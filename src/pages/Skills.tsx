import React from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/pages/Skills.css";
import Line from "../components/Line";
import { IDarkModeState } from "./App";
import jsonData from "../data.json";

enum Proficiency {
	BASIC = "Basic",
	INTERMEDIATE = "Intermediate",
	EXPERIENCED = "Experienced",
}

interface ISkill {
	skill: string,
	icon: string,
	proficiency: Proficiency,
	comments: string[],
}

function Skill(props: ISkill) {
	let imgSrc = "";
	try {
		// TODO fix
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		imgSrc = require(`../resources/${props.icon}.svg`);
	} catch (e) {
		imgSrc = "";
	}

	return (
		<div className="skill-info-container">
			<div className="skill-info">
				<h3 className="skill">{props.skill}</h3>
				{
					imgSrc && <img src={imgSrc} width="25"/>
				}
				<h3 className="skill-year">{props.proficiency}</h3>
			</div>
			<ul>
				{
					props.comments.map((com) => {
						return <li key={uuidv4()} className="skill-comments">{com}</li>;
					})
				}
			</ul>
		</div>
	);
}

function Education(props: IDarkModeState) {
	const skillsData = JSON.parse(JSON.stringify(jsonData)).skills;
	return (
		<div className={`page-container main-padding ${props.darkMode ? "dark-mode" : "light-mode"}`}>
			<div className="page-title">Skills</div>
			<Line className="margin-bottom" darkMode={props.darkMode} />
			<div>
				{skillsData.map((group: any) => {
					return <>
						<h2>{group.group}</h2>
						{group.skills.map((skill: any) => {
							return <Skill
								key={uuidv4()}
								skill={skill.name}
								icon={skill.icon}
								proficiency={skill.level}
								comments={skill.comments}
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

export default Education;