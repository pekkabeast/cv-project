import react, { Component } from "react";
import "../styles/School.css";

class School extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };

    this.handleEditSchool = this.handleEditSchool.bind(this);
    this.handleSaveSchool = this.handleSaveSchool.bind(this);
  }

  handleEditSchool() {
    this.setState({
      editing: true,
    });
  }

  handleSaveSchool() {
    this.setState({
      editing: false,
    });
  }

  render() {
    const { school, editSchool } = this.props;
    return (
      <div className="school" key={school.id} id={school.id}>
        {this.state.editing ? (
          <input
            type="text"
            className="schoolNameInput"
            value={school.name}
            id="schoolNameInput"
            onChange={editSchool}
          />
        ) : (
          <div className="school-name">{school.name}</div>
        )}
        {this.state.editing ? (
          <input
            type="text"
            className="degreeInput"
            onChange={editSchool}
            id="degreeInput"
            value={school.degree}
          />
        ) : (
          <div className="degree">{school.degree}</div>
        )}
        {this.state.editing ? (
          <input
            type="text"
            className="gradDateInput"
            onChange={editSchool}
            id="gradDateInput"
            value={school.gradDate}
          />
        ) : (
          <div className="grad-date">{school.gradDate}</div>
        )}
        {this.state.editing ? (
          <input
            type="text"
            className="schoolLocationInput"
            onChange={editSchool}
            id="schoolLocationInput"
            value={school.location}
          />
        ) : (
          <div className="school-location">{school.location}</div>
        )}
        {this.state.editing ? (
          <input
            type="text"
            className="schoolDescInput"
            onChange={editSchool}
            id="schoolDescInput"
            value={school.description}
          />
        ) : (
          <li className="school-description">
            <span>{school.description}</span>
          </li>
        )}
        {this.state.editing ? (
          <div className="saveSchool" onClick={this.handleSaveSchool}>
            Save School
          </div>
        ) : (
          <div className="editSchool" onClick={this.handleEditSchool}>
            Edit School
          </div>
        )}
      </div>
    );
  }
}

export default School;
