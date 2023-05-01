import react, { useState, useEffect } from "react";
import Job from "./Job";
import "../styles/Work.css";
import uniqid from "uniqid";

const Work = () => {
  const [jobList, setJobList] = useState([]);

  const newResponsibility = {
    text: "Core Responsibility",
    id: uniqid(),
  };

  const newJob = {
    company: "Top Company",
    title: "Founder & CEO",
    dates: "Oct. 2017 - Present",
    location: "Denver, CO",
    responsibilities: [newResponsibility],
    id: uniqid(),
  };

  function addJob() {
    setJobList([...jobList, newJob]);
  }

  function addResponsibility(event) {
    let jobId = event.target.parentElement.id;
    let targetJob = jobList.filter((job) => job.id === jobId)[0];

    setJobList(
      jobList.map((job) => {
        if (job === targetJob) {
          job.responsibilities = [...job.responsibilities, newResponsibility];
        }
        return job;
      })
    );
  }

  function editJob(event) {
    let parentElement = event.target.parentElement;
    while (parentElement.className !== "job") {
      parentElement = parentElement.parentElement;
    }
    let jobId = parentElement.id;
    let targetJob = jobList.filter((job) => job.id === jobId)[0];
    setJobList(
      jobList.map((job) => {
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
      })
    );
  }

  function deleteJob(event) {
    setJobList(
      jobList.filter((job) => job.id !== event.target.parentElement.id)
    );
  }

  function deleteResponsibility(event) {
    let parentElement = event.target.parentElement;
    while (parentElement.className !== "responsibility") {
      parentElement = parentElement.parentElement;
    }
    let responsibilityId = parentElement.getAttribute("data-id");
    while (parentElement.className !== "job") {
      parentElement = parentElement.parentElement;
    }
    setJobList(
      jobList.map((job) => {
        if (job.id === parentElement.id) {
          job.responsibilities = job.responsibilities.filter(
            (responsibility) => responsibility.id !== responsibilityId
          );
        }
        return job;
      })
    );
  }

  return (
    <div className="work-experience">
      <h2 className="work-header">Work Experience</h2>
      <div className="job-list">
        {jobList.map((job) => {
          return (
            <Job
              job={job}
              key={job.id}
              addResponsibility={addResponsibility}
              editJob={editJob}
              deleteJob={deleteJob}
              deleteResponsibility={deleteResponsibility}
            />
          );
        })}

        {jobList.length < 4 && (
          <div className="addJob" onClick={addJob}>
            Add Job
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;
