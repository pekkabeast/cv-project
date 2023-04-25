import react, { Component } from "react";
import "../styles/Job.css";

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
          />
        ) : (
          <div className="location">{job.location}</div>
        )}
        <ul className="responsibilities">
          {job.responsibilities.map((responsibility) => {
            return this.state.editing ? (
              <input
                type="text"
                value={responsibility.text}
                className="job-edit"
                key={responsibility.id}
                id={responsibility.id + "input"}
              />
            ) : (
              <li
                className="responsibility"
                key={responsibility.id}
                id={responsibility.id}
              >
                <span> {responsibility.text}</span>
              </li>
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
        {this.state.editing ? (
          <div className="saveResponsibility">Save Responsibility</div>
        ) : (
          <div className="addResponsibility">Add Responsibility</div>
        )}
      </div>
    );
  }
}

export default Job;
