import react, { useState } from "react";
import "../styles/School.css";

const School = (props) => {
  const [editing, setEditing] = useState(false);

  function handleEditSchool() {
    setEditing(true);
  }

  function handleSaveSchool() {
    setEditing(false);
  }
  const { school, editSchool } = props;

  return (
    <div className="school" key={school.id} id={school.id}>
      {editing ? (
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
      {editing ? (
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
      {editing ? (
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
      {editing ? (
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
      {editing ? (
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
      {editing ? (
        <div className="saveSchool" onClick={handleSaveSchool}>
          Save School
        </div>
      ) : (
        <div className="editSchool" onClick={handleEditSchool}>
          Edit School
        </div>
      )}

      <div className="deleteSchool" onClick={props.deleteSchool}>
        Delete School
      </div>
    </div>
  );
};

export default School;
