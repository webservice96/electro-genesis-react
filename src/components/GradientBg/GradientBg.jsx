import React, { useEffect, useRef, useState } from "react";
// import Granim from "granim";
import FOG from "vanta/dist/vanta.fog.min";
import HALO from "vanta/dist/vanta.halo.min";
import * as THREE from "three";
import "./Style.css";

function GradientBg({ variant }) {
	const [vantaEffect, setVantaEffect] = useState(0);
	const vantaRef = useRef(null);

	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect();
			// FOG({
			// 	el: vantaRef.current,
			// 	THREE,
			// 	highlightColor: 0xffebeb,
			// 	midtoneColor: 0xffebeb,
			// 	lowlightColor: 0xffebeb, //
			// 	baseColor: 0xf49393,
			// })

			// HALO({
			// 	el: vantaRef.current,
			// 	THREE,
			// 	mouseControls: true,
			// 	touchControls: true,
			// 	gyroControls: false,
			// 	baseColor: 0xfff,
			// 	backgroundColor: 0xec655e,
			// 	minHeight: 400.0,
			// 	minWidth: 200.0,
			// 	amplitudeFactor: 2.8,
			// 	xOffset: 0.04,
			// 	yOffset: 0.03,
			// 	size: 1.1,
			// });
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect]);

	return (
		<div className={`bg-gradient bg-color-${variant}`} ref={vantaRef}></div>
	);
}

export default GradientBg;
