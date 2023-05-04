import React from "react";
import "./Style.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function ImageSlider() {
	return (
		<section className="imgae-slider-block bg-white" data-aos="fade-down-right">
			<div className="image-sliders">
				<Splide
					options={{
						type: "loop",
						arrows: false,
						autoplay: true,
						pagination: false,
						perPage: 1,
						perMove: 1,
                        speed: 100
					}}
				>
					<SplideSlide>
						<div className="img-slider-item">
							<img src="/assets/img/slider/img1.jpg" className="img-fluid" alt="Image 1" />
							<span className="img-lab-caption">
								Hematogenix Labs
							</span>
						</div>
					</SplideSlide>
					<SplideSlide>
						<div className="img-slider-item">
							<img src="/assets/img/slider/img2.jpg" className="img-fluid" alt="Image 2" />
							<span className="img-lab-caption">
								Hematogenix Labs
							</span>
						</div>
					</SplideSlide>
					<SplideSlide>
						<div className="img-slider-item">
							<img src="/assets/img/slider/img3.jpg" className="img-fluid" alt="Image 3" />
							<span className="img-lab-caption">
								Hematogenix Labs
							</span>
						</div>
					</SplideSlide>
				</Splide>
			</div>
		</section>
	);
}

export default ImageSlider;
