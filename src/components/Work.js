import react, { Component } from "react";
import Job from "./Job";
import "../styles/Work.css";
import uniqid from "uniqid";

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobList: [],
      job: {
        company: "",
        title: "",
        dates: "",
        location: "",
        responsibilities: [],
        id: uniqid(),
      },
      responsibility: {
        text: "",
        id: uniqid(),
      },
    };

    this.addJob = this.addJob.bind(this);
  }

  addJob() {
    this.setState(
      {
        responsibility: {
          text: "Core Responsibility #1",
          id: this.state.responsibility.id,
        },
      },
      () => {
        this.setState(
          {
            job: {
              company: "Top Company",
              title: "Founder & CEO",
              dates: "Oct. 2017 - Present",
              location: "Denver, CO",
              responsibilities: [
                ...this.state.job.responsibilities,
                this.state.responsibility,
              ],
              id: this.state.job.id,
            },
          },
          () => {
            this.setState(
              {
                jobList: [...this.state.jobList, this.state.job],
              },
              () => {
                this.setState({
                  job: {
                    company: "",
                    title: "",
                    dates: "",
                    location: "",
                    responsibilities: [],
                    id: uniqid(),
                  },
                  responsibility: {
                    text: "",
                    id: uniqid(),
                  },
                });
              }
            );
          }
        );
      }
    );
  }

  addResponsibility() {}

  render() {
    return (
      <div className="work-experience">
        <h2 className="work-header">Work Experience</h2>
        <div className="job-list">
          {this.state.jobList.map((job) => {
            return <Job job={job} />;
          })}

          {this.state.jobList.length < 4 && (
            <div className="addJob" onClick={this.addJob}>
              Add Job
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Work;
