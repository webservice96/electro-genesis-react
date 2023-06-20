import React, { useEffect, useRef, useState } from "react";
import ExpertiseBlock from "../components/Home/ExpertiseBlock/ExpertiseBlock";
import OurTechnology from "../components/Home/OurTechnology/OurTechnology";
import Support from "../components/Home/Support/Support";
import ClinicalTrials from "../components/Home/ClinicalTrials/ClinicalTrials";
import ImageSlider from "../components/Home/ImageSlider/ImageSlider";
import Services from "../components/Home/Services/Services";
import Layout from "../Layout/Main/Layout";
import Banner from "../components/common/Banner/Banner";

import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";

function Home() {
	// const [vantaEffect, setVantaEffect] = useState(0);
	// const vantaRef = useRef(null);

	// useEffect(() => {
	// 	if (!vantaEffect) {
	// 		setVantaEffect(
	// 			BIRDS({
	// 				el: vantaRef.current,
	// 				THREE: THREE,
	// 				mouseControls: true,
	// 				touchControls: true,
	// 				gyroControls: false,
	// 				minHeight: 600.0,
	// 				minWidth: 600.0,
	// 				scale: 1.0,
	// 				scaleMobile: 1.0,
	// 			})
	// 		);
	// 	}
	// 	return () => {
	// 		if (vantaEffect) vantaEffect.destroy();
	// 	};
	// }, [vantaEffect]);

	return (
		<>
			<Banner
				isBanner={true}
				title="Leveraging A.I For Critical Business Intelligence"
				video={"/assets/videos/homepage-hd.mp4"}
				isPost={true}
			/>

			<Layout>
				<ExpertiseBlock />
				<OurTechnology />
				<Support />
				<ClinicalTrials />
				<ImageSlider />
				<Services />
			</Layout>
		</>
	);
}

export default Home;
