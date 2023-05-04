import React, { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";

const options = {
	damping: 0.07,
};

function SmoothScroll() {
	useEffect(() => {
		Scrollbar.init(document.getElementById('root'), options);
	}, []);

	return null;
}

export default SmoothScroll;
