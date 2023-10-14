import React, { useEffect, useRef, useState } from "react";
import ExpertiseBlock from "../components/Home/ExpertiseBlock/ExpertiseBlock";
import OurTechnology from "../components/Home/OurTechnology/OurTechnology";
import Support from "../components/Home/Support/Support";
import ClinicalTrials from "../components/Home/ClinicalTrials/ClinicalTrials";
import ImageSlider from "../components/Home/ImageSlider/ImageSlider";
import Services from "../components/Home/Services/Services";
import Layout from "../Layout/Main/Layout";
import Banner from "../components/common/Banner/Banner";
import GradientBg from "../components/GradientBg/GradientBg";

function Home() {
	return (
		<>
			<GradientBg variant={1} />
			<Banner
				isBanner={true}
				title="Leveraging A.I For Critical Business Intelligence"
				video={"/assets/videos/homepage-hd.mp4"}
				className={"home-page-hero"}
			/>

			<Layout>
				<ExpertiseBlock />
				<OurTechnology />
				<Support />
				<ClinicalTrials />
				{/* <ImageSlider /> */}
				<Services />
			</Layout>
		</>
	);
}

export default Home;
