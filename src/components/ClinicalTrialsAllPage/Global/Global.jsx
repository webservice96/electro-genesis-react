import React from "react";
import "./Style.css";
import TitleHeader from "../../common/TitleHeader/TitleHeader";
import { Col, Row } from "react-bootstrap";

function Global() {
	return (
		<>
			<div className="block-inner gray-pink-bg">
				<TitleHeader title={"GLOBAL"} />

				<div className="mt-4">
					<Row>
						<Col md={{ span: 6 }}>
							<div
								className="text-content pe-0 ms-3"
								data-aos="fade-right"
								data-aos-duration="2000"
							>
								<p>
									The global demand on the pharmaceutical
									industry to develop drugs at a rapid pace
									continues to increase. It is our vision to
									continue to support your efforts by
									providing access to top scientists and
									high-quality testing services at each of our
									facilities around the world. Hematogenix®
									operates four locations.
								</p>
							</div>
						</Col>
						<Col
							md={{ span: 5, offset: 1 }}
							data-aos="fade-left"
							data-aos-duration="2000"
						>
							<div className="image-div mb-3 ">
								<img
									className="rounded-3 w-75 mx-auto"
									src="/assets/img/clinical/global.png"
									alt="madecin test"
								/>
							</div>
							<ul className="ul-list w-75 mx-auto">
								<li className="item">
									<svg
										width="18"
										height="18"
										viewBox="0 0 18 18"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M12.0432 6.71299C11.9061 6.57588 11.7215 6.49854 11.5282 6.49854C11.3348 6.49854 11.1502 6.57412 11.0131 6.71299L7.96684 9.74345L6.99126 8.76084C6.71001 8.47959 6.24771 8.47607 5.96294 8.75556C5.67642 9.03506 5.6729 9.49736 5.95415 9.78564L7.44477 11.2868C7.58188 11.4239 7.76645 11.5013 7.96157 11.5013C8.15493 11.5013 8.33774 11.4257 8.47485 11.2886L12.0397 7.74482C12.3209 7.46357 12.3245 7.00127 12.045 6.7165L12.0432 6.71299Z"
											fill="#FF4134"
										></path>
										<path
											d="M17.1192 5.57222C16.6745 4.5228 16.0382 3.58062 15.2296 2.77026C14.4192 1.96167 13.4771 1.32534 12.4276 0.880615C11.3413 0.420068 10.1882 0.186279 8.9999 0.186279C4.14131 0.188037 0.187988 4.14136 0.187988 8.99995C0.187988 13.8585 4.14131 17.8119 8.9999 17.8119C13.8585 17.8119 17.8118 13.8585 17.8118 8.99995C17.8118 7.81167 17.5798 6.65855 17.1192 5.57222ZM8.9999 16.3546C4.94463 16.3546 1.64522 13.0552 1.64522 8.99995C1.64522 4.94468 4.94463 1.64526 8.9999 1.64526C13.0552 1.64526 16.3546 4.94468 16.3546 8.99995C16.3546 13.0552 13.0552 16.3546 8.9999 16.3546Z"
											fill="#FF4134"
										></path>
									</svg>
									<span className="label">North America</span>
								</li>
								<li className="item">
									<svg
										width="18"
										height="18"
										viewBox="0 0 18 18"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M12.0432 6.71299C11.9061 6.57588 11.7215 6.49854 11.5282 6.49854C11.3348 6.49854 11.1502 6.57412 11.0131 6.71299L7.96684 9.74345L6.99126 8.76084C6.71001 8.47959 6.24771 8.47607 5.96294 8.75556C5.67642 9.03506 5.6729 9.49736 5.95415 9.78564L7.44477 11.2868C7.58188 11.4239 7.76645 11.5013 7.96157 11.5013C8.15493 11.5013 8.33774 11.4257 8.47485 11.2886L12.0397 7.74482C12.3209 7.46357 12.3245 7.00127 12.045 6.7165L12.0432 6.71299Z"
											fill="#FF4134"
										></path>
										<path
											d="M17.1192 5.57222C16.6745 4.5228 16.0382 3.58062 15.2296 2.77026C14.4192 1.96167 13.4771 1.32534 12.4276 0.880615C11.3413 0.420068 10.1882 0.186279 8.9999 0.186279C4.14131 0.188037 0.187988 4.14136 0.187988 8.99995C0.187988 13.8585 4.14131 17.8119 8.9999 17.8119C13.8585 17.8119 17.8118 13.8585 17.8118 8.99995C17.8118 7.81167 17.5798 6.65855 17.1192 5.57222ZM8.9999 16.3546C4.94463 16.3546 1.64522 13.0552 1.64522 8.99995C1.64522 4.94468 4.94463 1.64526 8.9999 1.64526C13.0552 1.64526 16.3546 4.94468 16.3546 8.99995C16.3546 13.0552 13.0552 16.3546 8.9999 16.3546Z"
											fill="#FF4134"
										></path>
									</svg>
									<span className="label">Europe</span>
								</li>
								<li className="item">
									<svg
										width="18"
										height="18"
										viewBox="0 0 18 18"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M12.0432 6.71299C11.9061 6.57588 11.7215 6.49854 11.5282 6.49854C11.3348 6.49854 11.1502 6.57412 11.0131 6.71299L7.96684 9.74345L6.99126 8.76084C6.71001 8.47959 6.24771 8.47607 5.96294 8.75556C5.67642 9.03506 5.6729 9.49736 5.95415 9.78564L7.44477 11.2868C7.58188 11.4239 7.76645 11.5013 7.96157 11.5013C8.15493 11.5013 8.33774 11.4257 8.47485 11.2886L12.0397 7.74482C12.3209 7.46357 12.3245 7.00127 12.045 6.7165L12.0432 6.71299Z"
											fill="#FF4134"
										></path>
										<path
											d="M17.1192 5.57222C16.6745 4.5228 16.0382 3.58062 15.2296 2.77026C14.4192 1.96167 13.4771 1.32534 12.4276 0.880615C11.3413 0.420068 10.1882 0.186279 8.9999 0.186279C4.14131 0.188037 0.187988 4.14136 0.187988 8.99995C0.187988 13.8585 4.14131 17.8119 8.9999 17.8119C13.8585 17.8119 17.8118 13.8585 17.8118 8.99995C17.8118 7.81167 17.5798 6.65855 17.1192 5.57222ZM8.9999 16.3546C4.94463 16.3546 1.64522 13.0552 1.64522 8.99995C1.64522 4.94468 4.94463 1.64526 8.9999 1.64526C13.0552 1.64526 16.3546 4.94468 16.3546 8.99995C16.3546 13.0552 13.0552 16.3546 8.9999 16.3546Z"
											fill="#FF4134"
										></path>
									</svg>
									<span className="label">China</span>
								</li>

								<li className="item">
									<svg
										width="18"
										height="18"
										viewBox="0 0 18 18"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M12.0432 6.71299C11.9061 6.57588 11.7215 6.49854 11.5282 6.49854C11.3348 6.49854 11.1502 6.57412 11.0131 6.71299L7.96684 9.74345L6.99126 8.76084C6.71001 8.47959 6.24771 8.47607 5.96294 8.75556C5.67642 9.03506 5.6729 9.49736 5.95415 9.78564L7.44477 11.2868C7.58188 11.4239 7.76645 11.5013 7.96157 11.5013C8.15493 11.5013 8.33774 11.4257 8.47485 11.2886L12.0397 7.74482C12.3209 7.46357 12.3245 7.00127 12.045 6.7165L12.0432 6.71299Z"
											fill="#FF4134"
										></path>
										<path
											d="M17.1192 5.57222C16.6745 4.5228 16.0382 3.58062 15.2296 2.77026C14.4192 1.96167 13.4771 1.32534 12.4276 0.880615C11.3413 0.420068 10.1882 0.186279 8.9999 0.186279C4.14131 0.188037 0.187988 4.14136 0.187988 8.99995C0.187988 13.8585 4.14131 17.8119 8.9999 17.8119C13.8585 17.8119 17.8118 13.8585 17.8118 8.99995C17.8118 7.81167 17.5798 6.65855 17.1192 5.57222ZM8.9999 16.3546C4.94463 16.3546 1.64522 13.0552 1.64522 8.99995C1.64522 4.94468 4.94463 1.64526 8.9999 1.64526C13.0552 1.64526 16.3546 4.94468 16.3546 8.99995C16.3546 13.0552 13.0552 16.3546 8.9999 16.3546Z"
											fill="#FF4134"
										></path>
									</svg>
									<span className="label">Asia-Pacific</span>
								</li>
							</ul>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
}

export default Global;
