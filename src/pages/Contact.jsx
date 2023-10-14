import React from "react";
import Layout from "../Layout/Main/Layout";
import ContactPlace from "../components/Contact/ContactPlace/ContactPlace";
import ContactFormPopup from "../components/Contact/ContactFormPopup/ContactFormPopup";

function Contact() {
	return (
		<>
			<Layout className="overflow-hidden contact-page-template">
				<ContactPlace
					country={"United Kingdom"}
					address={
						" 1 Marischal Square, Broad Street, AB10 1NL, Aberdeen, United Kingdom"
					}
					officePhoto={"assets/img/contact/uk-office.jpg"}
					mapLink={"https://goo.gl/maps/fCngng5agL8npRWKA"}
					telephone={"+44.161.938.2121"}
					fax={"+44.808.171.8795"}
					email={"hello@workflow24.com"}
				/>

				<ContactPlace
					country={"United States"}
					address={
						"S-4, Kukatpally Industrial Estate, Balanagar, Hyderabad, 500037"
					}
					officePhoto={"assets/img/contact/contact-united-state.jpg"}
					mapLink={"https://goo.gl/maps/DbuyLkfPHdjadwCX9"}
					telephone={"+91-40-29395585"}
					email={"ClientServices@workflow24.com"}
				/>
				<ContactFormPopup />
			</Layout>
		</>
	);
}

export default Contact;
