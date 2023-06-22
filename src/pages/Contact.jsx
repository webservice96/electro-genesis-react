import React from "react";
import Layout from "../Layout/Main/Layout";
import ContactPlace from "../components/Contact/ContactPlace/ContactPlace";
import ContactFormPopup from "../components/Contact/ContactFormPopup/ContactFormPopup";

function Contact() {
	return (
		<>
			<Layout className="overflow-hidden contact-page-template">
				<ContactPlace
					country={"United States"}
					address={
						"Hematogenix 8150 W 185th St. Tinley Park, IL 60487"
					}
					officePhoto={"assets/img/contact/contact-united-state.jpg"}
					mapLink={"https://goo.gl/maps/DbuyLkfPHdjadwCX9"}
					tollFreeNumber={"+1 888.436.2861"}
					telephone={"+1 708.444.0444"}
					fax={"+1 708-444-0445"}
					email={"ClientServices@hematogenix.com"}
				/>

				<ContactPlace
					country={"United Kingdom"}
					address={
						"Hematogenix Pinnacle House, 2 Oakwood Square Cheadle Royal Business Park, Cheadle, SK8 3SB, UK"
					}
					officePhoto={"assets/img/contact/united-kingdom.jpg"}
					mapLink={"https://goo.gl/maps/RKcbXyfU8hPUj2HJ7"}
					telephone={"+44.161.938.2121"}
					fax={"+44.808.171.8795"}
					email={"ClientServices@hematogenix.com"}
				/>

				<ContactPlace
					country={"Malaysia"}
					address={
						"Hematogenix A4-1, Block A, Jalan Radius 1/1b Jalan Teknokrat 2/1, Radius Business Park, Cyber 4 63000 Cyberjaya, Selangor Malaysia"
					}
					officePhoto={"assets/img/contact/malaysia.jpg"}
					mapLink={""}
				/>

				<ContactPlace
					country={"China"}
					address={
						"3rd Floor. Building 12, No.128, Xiangyin Road Shanghai, China, 200433"
					}
					officePhoto={"assets/img/contact/china.jpg"}
					mapLink={""}
				/>

				<ContactFormPopup />
			</Layout>
		</>
	);
}

export default Contact;
