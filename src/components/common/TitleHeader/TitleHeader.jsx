import React from "react";
import "./Style.css";

function TitleHeader({ title }) {
	return (
		<>
			<div className="title">
				<span
					className="title-border-top border border-dark d-block"
					data-aos="fade-right"
					data-aos-offset="200"
				></span>
				<h1
					className="title-text m-0 py-3"
					data-aos="zoom-in-right"
					data-aos-duration="2000"
				>
					{title}
				</h1>
				<span
					className="title-border-bottom border border-dark d-block"
					data-aos="fade-left"
					data-aos-duration="1000"
					data-aos-offset="200"
				></span>
			</div>
		</>
	);
}

export default TitleHeader;
