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
    this.addResponsibility = this.addResponsibility.bind(this);
    this.editJob = this.editJob.bind(this);
  }

  addJob() {
    this.setState(
      {
        responsibility: {
          text: "Core Responsibility",
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

  addResponsibility(event) {
    let jobId = event.target.parentElement.id;
    let targetJob = this.state.jobList.filter((job) => job.id === jobId)[0];
    this.setState(
      {
        responsibility: {
          text: "Core Responsibility",
          id: this.state.responsibility.id,
        },
      },
      () => {
        this.setState({
          jobList: this.state.jobList.map((job) => {
            if (job === targetJob) {
              job.company = targetJob.company;
              job.title = targetJob.title;
              job.dates = targetJob.dates;
              job.location = targetJob.location;
              job.responsibilities = [
                ...job.responsibilities,
                this.state.responsibility,
              ];
            }
            return job;
          }),
          responsibility: {
            text: "",
            id: uniqid(),
          },
        });
      }
    );
  }

  editJob(event) {
    let parentElement = event.target.parentElement;
    if (parentElement.className !== "job") {
      parentElement = parentElement.parentElement;
    }
    let jobId = parentElement.id;
    let targetJob = this.state.jobList.filter((job) => job.id === jobId)[0];
    this.setState({
      jobList: this.state.jobList.map((job) => {
        if (job === targetJob) {
          let parentElement = document.querySelector(`#${job.id}`);
          job.company = parentElement.querySelector("#companyInput").value;
          job.title = parentElement.querySelector("#titleInput").value;
          job.dates = parentElement.querySelector("#datesInput").value;
          job.location = parentElement.querySelector("#locationInput").value;
          let responsibilities = parentElement.querySelectorAll(
            ".responsibility-edit"
          );
          responsibilities.forEach((responsibility) => {
            job.responsibilities.map((jobResponsibility) => {
              if (responsibility.id === jobResponsibility.id) {
                jobResponsibility.text = responsibility.value;
              }
              return jobResponsibility;
            });
          });
        }
        return job;
      }),
    });
  }

  render() {
    return (
      <div className="work-experience">
        <h2 className="work-header">Work Experience</h2>
        <div className="job-list">
          {this.state.jobList.map((job) => {
            return (
              <Job
                job={job}
                key={job.id}
                addResponsibility={this.addResponsibility}
                editJob={this.editJob}
              />
            );
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
