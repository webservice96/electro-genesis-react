import React, { useEffect, useRef, useState } from "react";
// import Granim from "granim";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import "./Style.css";

function GradientBg() {
	const [vantaEffect, setVantaEffect] = useState(0);
	const vantaRef = useRef(null);

	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				FOG({
					el: vantaRef.current,
					THREE,
					highlightColor: 0xffebeb,
					midtoneColor: 0xffebeb,
					lowlightColor: 0xffebeb,    // 
					baseColor: 0xF49393
				})
			);
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect]);
	
	return (
		<div className="bg-gradient" ref={vantaRef}></div>
	);
}

export default GradientBg;
