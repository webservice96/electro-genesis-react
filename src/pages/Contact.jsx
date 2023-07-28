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
						"Workflow 24 8150 W 185th St. Tinley Park, IL 60487"
					}
					officePhoto={"assets/img/contact/contact-united-state.jpg"}
					mapLink={"https://goo.gl/maps/DbuyLkfPHdjadwCX9"}
					tollFreeNumber={"+1 888.436.2861"}
					telephone={"+1 708.444.0444"}
					fax={"+1 708-444-0445"}
					email={"ClientServices@workflow24.com"}
				/>

				<ContactPlace
					country={"United Kingdom"}
					address={
						" 1 Marischal Square, Broad Street, AB10 1NL, Aberdeen, United Kingdom"
					}
					officePhoto={"assets/img/contact/uk-office.jpg"}
					mapLink={"https://goo.gl/maps/fCngng5agL8npRWKA"}
					telephone={"+44.161.938.2121"}
					fax={"+44.808.171.8795"}
					email={"ClientServices@workflow24.com"}
				/>

				<ContactFormPopup />
			</Layout>
		</>
	);
}

export default Contact;
