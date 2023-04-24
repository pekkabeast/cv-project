import react, { Component } from "react";
import Contact from "./Contact";
import Work from "./Work";
import Education from "./Education";
import Skills from "./Skills";
import "../styles/Resume.css";

class Resume extends Component {
  constructor(props) {
    super(props);
    this.contactEdit = this.contactEdit.bind(this);

    this.state = {
      name: "John Smith",
      email: "email@gmail.com",
      phone: "555-555-5555",
      city: "Toronto",
      province: "ON",
    };
  }

  contactEdit() {
    this.setState({
      name: document.querySelector(".name-input").value,
      email: document.querySelector("#emailInput").value,
      phone: document.querySelector("#phoneInput").value,
      city: document.querySelector("#cityInput").value,
      province: document.querySelector("#provinceInput").value,
    });
  }

  render() {
    const { name, email, phone, city, province } = this.state;

    return (
      <div className="resume">
        <Contact
          name={name}
          email={email}
          phone={phone}
          city={city}
          province={province}
          edit={this.contactEdit}
        />
        <Work />
        <Education />
        <Skills />
      </div>
    );
  }
}

export default Resume;
