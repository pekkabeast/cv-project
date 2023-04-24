import react, { Component } from "react";
import "../styles/Job.css";

class Job extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };
  }

  render() {
    const { job } = this.props;

    return (
      <div className="job" key={job.id}>
        {this.state.editing ? (
          <input
            type="text"
            value={this.props.company}
            className="job-edit"
            id="companyInput"
          />
        ) : (
          <div className="company">{job.company}</div>
        )}
        <div className="title">{job.title}</div>
        <div className="dates">{job.dates}</div>
        <div className="location">{job.location}</div>
        <ul className="responsibilities">
          {job.responsibilities.map((responsibility) => {
            return (
              <li className="responsibility" key={responsibility.id}>
                <span> {responsibility.text}</span>
              </li>
            );
          })}
        </ul>
        {this.state.editing ? (
          <div className="saveJob">Save changes</div>
        ) : (
          <div className="editJob">Edit Job</div>
        )}
      </div>
    );
  }
}

export default Job;
