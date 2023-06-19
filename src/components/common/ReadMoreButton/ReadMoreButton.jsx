import React, { useState } from "react";
import "./Style.css";
import { useNavigate } from "react-router-dom";

export function ReadMoreButton({ lable, setShow, link }) {
	const navigate = useNavigate();

	// const [show, setShow] = useState(false);

	const clickHendelar = () => {
		if (link) {
			navigate(link);
		}
		if (setShow) {
			setShow(true);
		}
	};
	return (
		<button
			className="read-more-btn small-size black-color"
			onClick={clickHendelar}
		>
			<div className="inner">
				<span className="icon arrow-right">
					<span className="icon-container arrow-right-icon-container">
						<svg
							width="11"
							height="10"
							viewBox="0 0 11 10"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="arrow-right-icon shadow-icon"
						>
							<path
								d="M1.19922 4.82703L9.23616 4.82703"
								stroke="#2C2C2C"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
							<path
								d="M5.73438 8.8457L9.37779 4.89867L5.73437 1.25526"
								stroke="#2C2C2C"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
						</svg>
						<svg
							width="11"
							height="10"
							viewBox="0 0 11 10"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="arrow-right-icon"
						>
							<path
								d="M1.19922 4.82703L9.23616 4.82703"
								stroke="#2C2C2C"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
							<path
								d="M5.73438 8.8457L9.37779 4.89867L5.73437 1.25526"
								stroke="#2C2C2C"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
						</svg>
					</span>
				</span>
				<span className="label-sizer">{lable ? lable : "More"}</span>
			</div>
			<div className="label-container">
				<span className="label">{lable ? lable : "More"}</span>
			</div>
		</button>
	);
}
