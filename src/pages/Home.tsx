import React from "react";
import "../styles/pages/Home.css";
import Line from "../components/Line";
import PageLink from "../components/PageLink";
import { IDarkModeState } from "./App";

function Home(props: IDarkModeState) {
	return (
		<div className={`page-container main-padding ${props.darkMode ? "dark-mode" : "light-mode"}`}>
			<p className="name">SOLOMON KWAN</p>
			<div className="links-container">
				<a
					target="_"
					href="https://www.linkedin.com/in/jiu-yue-solomon-kwan/"
					className="fa fa-linkedin linkedin-icon icon"
					draggable={false}
				/>
				<a
					target="_"
					href="https://www.github.com/SolomonKwan"
					className={`fa fa-github github-icon icon ${props.darkMode ? "github-dark-mode" : "github-light-mode"}`}
					draggable={false}
				/>
			</div>
			<Line darkMode={props.darkMode} />
			<div className="links-container">
				<PageLink link="education" className={`home-page-link ${props.darkMode ? "dark-mode" : "light-mode"}`} />
				<PageLink link="experience" className={`home-page-link ${props.darkMode ? "dark-mode" : "light-mode"}`} />
				<PageLink link="skills" className={`home-page-link ${props.darkMode ? "dark-mode" : "light-mode"}`} />
				<PageLink link="contact" className={`home-page-link ${props.darkMode ? "dark-mode" : "light-mode"}`} />
			</div>
			<a
				href={require("../resources/cv.pdf")}
				download="SolomonKwanCV.pdf"
				className={`fa fa-download cv-download ${props.darkMode ? "dark-mode" : "light-mode"}`}
			>
				<p>CV</p>
			</a>
		</div>
	);
}

export default Home;