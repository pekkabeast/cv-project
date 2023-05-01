import react, { useState } from "react";
import "../styles/Education.css";
import School from "./School";
import uniqid from "uniqid";

const Education = () => {
  const [schoolList, setSchoolList] = useState([]);

  const newSchool = {
    name: "University Name",
    degree: "Degree",
    gradDate: "Graduation Month, Year",
    location: "City,ST",
    description: "Description",
    id: uniqid(),
  };

  function addSchool() {
    setSchoolList([...schoolList, newSchool]);
  }

  function editSchool(event) {
    let parent = event.target.parentElement;
    setSchoolList(
      schoolList.map((school) => {
        if (school.id === parent.id) {
          school.name = parent.querySelector(".schoolNameInput").value;
          school.degree = parent.querySelector(".degreeInput").value;
          school.gradDate = parent.querySelector(".gradDateInput").value;
          school.location = parent.querySelector(".schoolLocationInput").value;
          school.description = parent.querySelector(".schoolDescInput").value;
        }
        return school;
      })
    );
  }

  function deleteSchool(event) {
    let parent = event.target.parentElement;
    setSchoolList(schoolList.filter((school) => school.id !== parent.id));
  }

  return (
    <div className="education">
      <h2 className="education-header">Education</h2>
      <div className="education-list">
        {schoolList.map((school) => {
          return (
            <School
              school={school}
              key={school.id}
              editSchool={editSchool}
              deleteSchool={deleteSchool}
            />
          );
        })}
      </div>
      {schoolList.length < 2 && (
        <div className="addSchool" onClick={addSchool}>
          Add School
        </div>
      )}
    </div>
  );
};

export default Education;
