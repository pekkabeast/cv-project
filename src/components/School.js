import react, { Component } from "react";
import "../styles/School.css";

class School extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { school } = this.props;
    return (
      <div className="school">
        <div className="school-name">{school.name}</div>
        <div className="degree">{school.degree}</div>
        <div className="grad-date">{school.gradDate}</div>
        <div className="school-location">{school.location}</div>
        <li className="school-description">
          <span>{school.description}</span>
        </li>
      </div>
    );
  }
}

export default School;
