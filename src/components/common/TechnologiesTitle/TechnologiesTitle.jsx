import React from "react";
import "./Style.css";

function TechnologiesTitle({ title }) {
	return (
		<>
			<div className="technologies-title">
				<h1
					className="technologies-title-text m-0"
					data-aos="fade-up"
					data-aos-duration="2000"
					id="aos-here"
				>
					{title}
				</h1>
			</div>
		</>
	);
}
export default TechnologiesTitle;
