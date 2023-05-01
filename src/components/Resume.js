import react, { useState } from "react";
import Contact from "./Contact";
import Work from "./Work";
import Education from "./Education";
import Skills from "./Skills";
import "../styles/Resume.css";

const Resume = () => {
  const [name, setName] = useState("John Smith");

  const [email, setEmail] = useState("email@gmail.com");

  const [phone, setPhone] = useState("555-555-5555");

  const [city, setCity] = useState("Toronto");

  const [province, setProvince] = useState("ON");

  function contactEdit() {
    setName(document.querySelector(".name-input").value);
    setEmail(document.querySelector("#emailInput").value);
    setPhone(document.querySelector("#phoneInput").value);
    setCity(document.querySelector("#cityInput").value);
    setProvince(document.querySelector("#provinceInput").value);
  }

  return (
    <div className="resume">
      <Contact
        name={name}
        email={email}
        phone={phone}
        city={city}
        province={province}
        edit={contactEdit}
      />
      <Work />
      <Education />
      <Skills />
    </div>
  );
};

export default Resume;
