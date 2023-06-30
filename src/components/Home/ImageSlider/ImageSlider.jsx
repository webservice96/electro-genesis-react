import React from "react";
import "./Style.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function ImageSlider() {
	return (
		<section
			className="imgae-slider-block bg-white"
			data-aos="fade-down-right"
		>
			<div className="image-sliders">
				<Splide
					options={{
						type: "loop",
						arrows: false,
						autoplay: true,
						pagination: false,
						perPage: 1,
						perMove: 1,
						speed: 100,
					}}
				>
					<SplideSlide>
						<div className="img-slider-item">
							<img
								src="/assets/images/side-view-woman-working-digital-monitors.jpg"
								className="img-fluid-"
								alt="Image 2"
							/>
							<span className="img-lab-caption">
								Workflow 24 Labs
							</span>
						</div>
					</SplideSlide>
					<SplideSlide>
						<div className="img-slider-item">
							<img
								src="/assets/images/smart-robotic-farmers-concept-robot-farmers-agriculture-technology-farm-automation.jpg"
								className="img-fluid-"
								alt="Image 3"
							/>
							<span className="img-lab-caption">
								Workflow 24 Labs
							</span>
						</div>
					</SplideSlide>
				</Splide>
			</div>
		</section>
	);
}

export default ImageSlider;
