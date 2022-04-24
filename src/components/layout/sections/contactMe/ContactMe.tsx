import React from "react";
import { FiMail } from "react-icons/fi";
import Header from "../../header/Header";
import Contacts from "./components/contacts/Contacts";

const ContactMe = () => {
  return (
    <section id="contact-me">
      <Header
        name="Contact me"
        icon={<FiMail className="icon" size="28" />}
        textSecondary="Natalya Sentemova"
      />
      <Contacts /> 
    </section>
  );
};
export default ContactMe;
