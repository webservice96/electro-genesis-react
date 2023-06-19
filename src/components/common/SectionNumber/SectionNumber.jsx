import React from "react";
import "./Style.css";

function SectionNumber({ textNumber = 0, className = "", mode = "" }) {
	return (
		<div
			className={`section-order-number position-relative d-flex justify-content-center align-items-center ${className} ${mode}`}
			data-aos="fade-down"
			data-aos-easing="linear"
			data-aos-duration="1000"
		>
			<span>{textNumber}</span>
		</div>
	);
}

export default SectionNumber;
