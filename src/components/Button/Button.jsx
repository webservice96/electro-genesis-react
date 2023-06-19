import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Style.css'
import { Link } from "react-router-dom";

function Button({lavel, link, icon, className}) {
	return (
		<Link to={link} className={`sec-btn ${className}`}>
			{lavel}{" "}
			<span>
				<FontAwesomeIcon icon={icon} />
			</span>
		</Link>
	);
}

export default Button;
