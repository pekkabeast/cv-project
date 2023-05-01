import Header from "./components/Header";
import Resume from "./components/Resume";
import "./styles/App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Resume />
    </div>
  );
};

export default App;

/*
Component Hierarchy
App
  - Header : App logo, Export PDF button
  - Resume
    - Contact Info: Name, Email, Phone, City
    - Work Experience
      - Job: Company name, Job title, Dates, Location, Responsibilities
    - Education
      - School: School name, degree, graduation date, location, Description
    - Skills
      - Skill
*/
