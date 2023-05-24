import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/PageLink.css";

interface IPageLink {
	link: string,
	className?: string
}

function PageLink(props: IPageLink) {
	function capitalise(string: string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	return (
		<Link
			className={`link ${props.className ?? ""}`}
			to={`/${props.link}`}
			draggable={false}
		>
			{capitalise(props.link)}
		</Link>
	);
}

export default PageLink;