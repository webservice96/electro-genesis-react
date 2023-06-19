import React, { useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import SectionNumber from "../../common/SectionNumber/SectionNumber";
import "./Style.css";
import JobItem from "./JobItem/JobItem";

const jobs = [
	{
		title: "Accessioning Technician",
		jobType: "Full-time",
		location: "Chicago, USA",
		mailTo: "jobs@hematogenix.com",
		category: "operation",
	},
	{
		title: "Project Manager",
		jobType: "Full-time",
		location: "Wasington, USA",
		mailTo: "jobs@hematogenix.com",
		category: "operation",
	},
	{
		title: "Clinical Study Coordinator",
		jobType: "Full-time",
		location: "Chicago, USA",
		mailTo: "jobs@hematogenix.com",
		category: "operation",
	},
	{
		title: "Quality Auditor",
		jobType: "Full-time",
		location: "Torento, Canada",
		mailTo: "jobs@hematogenix.com",
		category: "operation",
	},
	{
		title: "Medical Billing & Collections Specialist",
		jobType: "Full-time",
		location: "Chicago, USA",
		mailTo: "jobs@hematogenix.com",
		category: "marketing",
	},
	{
		title: "Cytogenetics Laboratory Technician",
		jobType: "Full-time",
		location: "California, USA",
		mailTo: "jobs@hematogenix.com",
		category: "scientific",
	},
	{
		title: "Medical Technologist",
		jobType: "Full-time",
		location: "Chicago, USA",
		mailTo: "jobs@hematogenix.com",
		category: "scientific",
	},
	{
		title: "Molecular Technologist",
		jobType: "Full-time",
		location: "London, UK",
		mailTo: "jobs@hematogenix.com",
		category: "scientific",
	},
	{
		title: "IT Specialist",
		jobType: "Full-time",
		location: "Dehli, India",
		mailTo: "jobs@hematogenix.com",
		category: "it",
	},
	{
		title: "Desktop Support Specialist",
		jobType: "Full-time",
		location: "Mokka, Saudi",
		mailTo: "jobs@hematogenix.com",
		category: "it",
	},
	{
		title: "Software Tester",
		jobType: "Full-time",
		location: "London, UK",
		mailTo: "jobs@hematogenix.com",
		category: "it",
	},
];

function CompanyJobs() {
	const [location, setLocation] = useState("all");
	const [team, setTeam] = useState("all");

	const handleLocationChange = (e) => {
		setLocation(e.target.value);
	};

	const handleTeamChange = (e) => {
		setTeam(e.target.value);
	};

	const filterByLocation = (job) => {
		if (location === "all") {
			return job;
		} else {
			return job.location === location;
		}
	};
	const filterByTeam = (job) => {
		if (team === "all") {
			return job;
		} else {
			return job.category === team;
		}
	};

	// NiceSelect.bind(document.getElementById("job-find"), {
	// 	searchable: true,
	// 	placeholder: "select",
	// 	searchtext: "zoek",
	// 	selectedtext: "geselecteerd",
	// });

	const locations = [...new Set(jobs.map((job) => job.location))];

	return (
		<>
			<div className="company-jobs section-padding" id="careers">
				<Container className="pb-5">
					<div className="company-jobs-header">
						<Row className="mb-md-5">
							<Col md={4}>
								<div className="company-culture-header">
									<SectionNumber
										className="mb-3"
										textNumber={`07`}
									/>
									<h2
										className="comp-team-headline"
										data-aos="fade-up"
										data-aos-easing="linear"
										data-aos-duration="1000"
									>
										Come work with us!
									</h2>
								</div>
							</Col>
							<Col
								md={8}
								data-aos="fade-left"
								data-aos-duration="2000"
							>
								<p className="mb-md-4">
									Hematogenix is a fast-growing specialty
									reference laboratory committed to excellence
									and high-quality services. We treat all
									individuals with mutual respect and
									integrity, and we value their contributions.
									We are committed to providing a positive and
									flexible environment that supports work-life
									balance.
								</p>

								<p>
									We are always looking for talented and
									highly motivated individuals to join our
									team. We offer a very competitive benefits
									package and career development opportunities
									to help you achieve your highest
									professional and personal goals. We are
									eager to show you all we have to offer!
								</p>
							</Col>
						</Row>
					</div>
				</Container>

				<div className="job-container">
					<Container className="position-relative">
						<div
							className="job-search-box mb-5"
							data-aos="fade-down"
							data-aos-easing="linear"
							data-aos-duration="1000"
						>
							<Row className="justify-content-center align-items-center">
								<Col md={4}>
									<span className="job-search-lebel">
										Filter by
									</span>
								</Col>
								<Col md={4}>
									<Form.Select
										onChange={handleLocationChange}
										aria-label="Location Office"
									>
										<option value="all">
											Location Office
										</option>
										{locations.map((jobLocation, index) => (
											<option
												key={index}
												value={jobLocation}
											>
												{jobLocation}
											</option>
										))}
									</Form.Select>
								</Col>
								<Col md={4}>
									<Form.Select
										onChange={handleTeamChange}
										aria-label="Teams"
										id="job-find"
									>
										<option value="all">Teams</option>
										<option value="operation">
											Operations
										</option>
										<option value="marketing">
											Marketing & Support
										</option>
										<option value="scientific">
											Scientific
										</option>
										<option value="it">IT</option>
									</Form.Select>
								</Col>
							</Row>
						</div>

						<div className="job-list">
							{jobs
								.filter(filterByLocation)
								.filter(filterByTeam)
								.map((job) => (
									<JobItem key={job.title} job={job} />
								))}
						</div>
					</Container>
				</div>
			</div>
		</>
	);
}

export default CompanyJobs;
