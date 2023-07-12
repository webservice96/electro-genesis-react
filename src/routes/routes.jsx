import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../Layout/Main/Main";
import Expertise from "../pages/Expertise";
import HematopathologyPage from "../pages/Expertise/HematopathologyPage";
import SolidTumorPathologyPage from "../pages/Expertise/SolidTumorPathologyPage";
import MinimalResidualDiseasePage from "../pages/Expertise/MinimalResidualDiseasePage";
import CompanionDiagnosticsPage from "../pages/Expertise/CompanionDiagnosticsPage";
import NextGenerationPage from "../pages/Expertise/NextGenerationPage";
import ImmunoOncologyPage from "../pages/Expertise/ImmunoOncologyPage";
import TestOfferingPage from "../pages/ClinicalTrails/TestOfferingPage";
import ProcessesPage from "../pages/ClinicalTrails/ProcessesPage";
import AssayDevelopmentPage from "../pages/ClinicalTrails/AssayDevelopmentPage";
import LogisticsPage from "../pages/ClinicalTrails/LogisticsPage";
import CompanionDiagnosticPage from "../pages/ClinicalTrails/CompanionDiagnosticPage";
import ProjectManagementPage from "../pages/ClinicalTrails/ProjectManagementPage";
import GlobalPage from "../pages/ClinicalTrails/GlobalPage";
import ReportingPage from "../pages/ClinicalTrails/ReportingPage";
import FlowCytometryPage from "../pages/TechnologyPage/FlowCytometryPage";
import MolecularGeneticPage from "../pages/TechnologyPage/MolecularGeneticPage";
import CytogeneticsPage from "../pages/TechnologyPage/CytogeneticsPage";
import HistologyPage from "../pages/TechnologyPage/HistologyPage";
import ImmunoassaysPage from "../pages/TechnologyPage/ImmunoassaysPage";
import DigitalPathologyPage from "../pages/TechnologyPage/DigitalPathologyPage";
import Service from "../pages/Service";
import ClinicalTrail from "../pages/ClinicalTrail";
import Technology from "../pages/Technology";
import NotFound404 from "../pages/NotFound404";
import Company from "../pages/Company";
import Contact from "../pages/Contact";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import CookiePolicy from "../pages/CookiePolicy";
import NextPage from "../components/NextPage/NextPage";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/advanced-modelling",
				element: <Expertise />,
			},
			{
				path: "/business-intel",
				element: <Service />,
			},
			{
				path: "/system-efficiencies",
				element: <ClinicalTrail />,
			},
			{
				path: "/industry",
				element: <Technology />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "expertise/hematopathology",
				element: <HematopathologyPage />,
			},
			{
				path: "expertise/solid-tumor-pathology",
				element: <SolidTumorPathologyPage />,
			},
			{
				path: "expertise/minimal-residual-disease",
				element: <MinimalResidualDiseasePage />,
			},
			{
				path: "expertise/companion-diagnostics-cdx",
				element: <CompanionDiagnosticsPage />,
			},
			{
				path: "expertise/next-generation-sequencing",
				element: <NextGenerationPage />,
			},
			{
				path: "expertise/immuno-oncology",
				element: <ImmunoOncologyPage />,
			},
			{
				path: "clinical-trials/test-offering",
				element: <TestOfferingPage />,
			},
			{
				path: "clinical-trials/processes",
				element: <ProcessesPage />,
			},
			{
				path: "clinical-trials/assay-development",
				element: <AssayDevelopmentPage />,
			},
			{
				path: "clinical-trials/logistics",
				element: <LogisticsPage />,
			},
			{
				path: "clinical-trials/companion-diagnostics",
				element: <CompanionDiagnosticPage />,
			},
			{
				path: "clinical-trials/project-management",
				element: <ProjectManagementPage />,
			},
			{
				path: "clinical-trials/global",
				element: <GlobalPage />,
			},
			{
				path: "clinical-trials/reporting",
				element: <ReportingPage />,
			},
			{
				path: "technologies/flow-cytometry",
				element: <FlowCytometryPage />,
			},
			{
				path: "technologies/molecular-genetics",
				element: <MolecularGeneticPage />,
			},
			{
				path: "technologies/cytogenetics-fish",
				element: <CytogeneticsPage />,
			},
			{
				path: "technologies/histology",
				element: <HistologyPage />,
			},
			{
				path: "technologies/immunoassays",
				element: <ImmunoassaysPage />,
			},
			{
				path: "technologies/digital-pathology",
				element: <DigitalPathologyPage />,
			},
			{
				path: "privacy-policy",
				element: <PrivacyPolicy />,
			},
			{
				path: "cookie-policy",
				element: <CookiePolicy />,
			},
			{
				path: "*",
				element: <NotFound404 />,
			},
		],
	},
	{
		path: "/our-story",
		element: [<Company />, <NextPage />],
	},
]);

export default routes;
