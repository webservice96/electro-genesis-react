import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Style.css'

function Button({lavel, link, icon}) {
	return (
		<a href={link} className="sec-btn">
			{lavel}{" "}
			<span>
				<FontAwesomeIcon icon={icon} />
			</span>
		</a>
	);
}

export default Button;
