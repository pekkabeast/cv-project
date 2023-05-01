import react, { useState } from "react";
import "../styles/Job.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Job = (props) => {
  const [editing, setEditing] = useState(false);

  function handleEditJob() {
    setEditing(true);
  }

  function handleSaveJob() {
    if (props.job.company !== "") {
      setEditing(false);
    }
  }

  const { job } = props;

  return (
    <div className="job" key={job.id} id={job.id}>
      {editing ? (
        <input
          type="text"
          value={job.company}
          className="job-edit"
          id="companyInput"
          onChange={props.editJob}
        />
      ) : (
        <div className="company">{job.company}</div>
      )}
      {editing ? (
        <input
          type="text"
          value={job.title}
          className="job-edit"
          id="titleInput"
          onChange={props.editJob}
        />
      ) : (
        <div className="title">{job.title}</div>
      )}
      {editing ? (
        <input
          type="text"
          value={job.dates}
          className="job-edit"
          id="datesInput"
          onChange={props.editJob}
        />
      ) : (
        <div className="dates">{job.dates}</div>
      )}
      {editing ? (
        <input
          type="text"
          value={job.location}
          className="job-edit"
          id="locationInput"
          onChange={props.editJob}
        />
      ) : (
        <div className="location">{job.location}</div>
      )}
      <ul className="responsibilities">
        {job.responsibilities.map((responsibility) => {
          return (
            <div
              key={responsibility.id}
              data-id={responsibility.id}
              className="responsibility"
            >
              {editing ? (
                <input
                  type="text"
                  value={responsibility.text}
                  className="job-edit responsibility-edit"
                  key={responsibility.id}
                  id={responsibility.id}
                  onChange={props.editJob}
                />
              ) : (
                <li
                  className="responsibility"
                  key={responsibility.id}
                  id={responsibility.id}
                >
                  <span> {responsibility.text}</span>
                </li>
              )}
              {editing ? (
                <FontAwesomeIcon
                  icon={faX}
                  className="delete-X deleteResponsibility delete-X-input"
                  onClick={props.deleteResponsibility}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faX}
                  className="delete-X deleteResponsibility"
                  onClick={props.deleteResponsibility}
                />
              )}
            </div>
          );
        })}
      </ul>
      {editing ? (
        <div className="saveJob" onClick={handleSaveJob}>
          Save changes
        </div>
      ) : (
        <div className="editJob" onClick={handleEditJob}>
          Edit Job
        </div>
      )}

      {!editing && job.responsibilities.length < 4 && (
        <div className="addResponsibility" onClick={props.addResponsibility}>
          Add Responsibility
        </div>
      )}

      <div className="deleteJob" onClick={props.deleteJob}>
        Delete Job
      </div>
    </div>
  );
};

export default Job;
