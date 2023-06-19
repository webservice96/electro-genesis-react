import React from "react";
import Layout from "../Layout/Main/Layout";
import Banner from "../components/common/Banner/Banner";
import CompanyHeroText from "../components/Company/CompanyHeroText/CompanyHeroText";
import CompanyLeaders from "../components/Company/CompanyLeaders/CompanyLeaders";
import CompanyClientClock from "../components/Company/CompanyClientClock/CompanyClientClock";
import CompanyTeamMembers from "../components/Company/CompanyTeamMembers/CompanyTeamMembers";
import CompanyHistory from "../components/Company/CompanyHistory/CompanyHistory";
import CompanyCultureBlock from "../components/Company/CompanyCultureBlock/CompanyCultureBlock";
import CompanyCoreValue from "../components/Company/CompanyCoreValue/CompanyCoreValue";
import CompanyJobs from "../components/Company/CompanyJobs/CompanyJobs";
import CompanyContact from "../components/Company/CompanyContact/CompanyContact";

function Company() {
	return (
		<>
			<Banner
				isBanner={true}
				title="Our Story. Unbending, Yet Agile."
				video={"/assets/videos/company-hd.mp4"}
				className={`company-banner`}
			/>

			<Layout className="company position-relative bg-white">
				<CompanyHeroText />
                <CompanyLeaders />
				<CompanyClientClock />
				<CompanyTeamMembers />
				<CompanyHistory />
				<CompanyCultureBlock />
				<CompanyCoreValue />
				<CompanyJobs />
				<CompanyContact />
			</Layout>
		</>
	);
}

export default Company;
