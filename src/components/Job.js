import react, { Component } from "react";
import "../styles/Job.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

class Job extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };

    this.handleEditJob = this.handleEditJob.bind(this);
    this.handleSaveJob = this.handleSaveJob.bind(this);
  }

  handleEditJob() {
    this.setState({
      editing: true,
    });
  }

  handleSaveJob() {
    this.setState({
      editing: false,
    });
  }

  render() {
    const { job } = this.props;

    return (
      <div className="job" key={job.id} id={job.id}>
        {this.state.editing ? (
          <input
            type="text"
            value={job.company}
            className="job-edit"
            id="companyInput"
            onChange={this.props.editJob}
          />
        ) : (
          <div className="company">{job.company}</div>
        )}
        {this.state.editing ? (
          <input
            type="text"
            value={job.title}
            className="job-edit"
            id="titleInput"
            onChange={this.props.editJob}
          />
        ) : (
          <div className="title">{job.title}</div>
        )}
        {this.state.editing ? (
          <input
            type="text"
            value={job.dates}
            className="job-edit"
            id="datesInput"
            onChange={this.props.editJob}
          />
        ) : (
          <div className="dates">{job.dates}</div>
        )}
        {this.state.editing ? (
          <input
            type="text"
            value={job.location}
            className="job-edit"
            id="locationInput"
            onChange={this.props.editJob}
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
                {this.state.editing ? (
                  <input
                    type="text"
                    value={responsibility.text}
                    className="job-edit responsibility-edit"
                    key={responsibility.id}
                    id={responsibility.id}
                    onChange={this.props.editJob}
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
                {this.state.editing ? (
                  <FontAwesomeIcon
                    icon={faX}
                    className="delete-X deleteResponsibility delete-X-input"
                    onClick={this.props.deleteResponsibility}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faX}
                    className="delete-X deleteResponsibility"
                    onClick={this.props.deleteResponsibility}
                  />
                )}
              </div>
            );
          })}
        </ul>
        {this.state.editing ? (
          <div className="saveJob" onClick={this.handleSaveJob}>
            Save changes
          </div>
        ) : (
          <div className="editJob" onClick={this.handleEditJob}>
            Edit Job
          </div>
        )}

        {!this.state.editing && job.responsibilities.length < 4 && (
          <div
            className="addResponsibility"
            onClick={this.props.addResponsibility}
          >
            Add Responsibility
          </div>
        )}

        <div className="deleteJob" onClick={this.props.deleteJob}>
          Delete Job
        </div>
      </div>
    );
  }
}

export default Job;
