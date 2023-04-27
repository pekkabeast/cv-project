import react, { Component } from "react";
import "../styles/Education.css";
import School from "./School";
import uniqid from "uniqid";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolList: [],
      school: {
        name: "",
        degree: "",
        gradDate: "",
        location: "",
        description: "",
        id: uniqid(),
      },
    };

    this.addSchool = this.addSchool.bind(this);
  }

  addSchool() {
    this.setState(
      {
        school: {
          name: "University Name",
          degree: "Degree",
          gradDate: "Graduation Month, Year",
          location: "City,ST",
          description: "Description",
          id: this.state.school.id,
        },
      },
      () => {
        this.setState(
          {
            schoolList: [...this.state.schoolList, this.state.school],
          },
          () => {
            this.setState({
              school: {
                name: "",
                degree: "",
                gradDate: "",
                location: "",
                description: "",
                id: uniqid(),
              },
            });
          }
        );
      }
    );
  }

  render() {
    return (
      <div className="education">
        <h2 className="education-header">Education</h2>
        <div className="education-list">
          {this.state.schoolList.map((school) => {
            return <School school={school} key={school.id} />;
          })}
        </div>
        {this.state.schoolList.length < 2 && (
          <div className="addSchool" onClick={this.addSchool}>
            Add School
          </div>
        )}
      </div>
    );
  }
}

export default Education;
