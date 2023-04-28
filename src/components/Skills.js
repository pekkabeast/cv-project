import react, { Component } from "react";
import Skill from "./Skill";
import uniqid from "uniqid";
import "../styles/Skills.css";

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skillsList: [],
      skill: {
        text: "",
        id: uniqid(),
      },
      editing: false,
    };

    this.addSkill = this.addSkill.bind(this);
    this.handleEditSkills = this.handleEditSkills.bind(this);
    this.handleSaveSkills = this.handleSaveSkills.bind(this);
    this.editSkill = this.editSkill.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);
  }

  addSkill() {
    this.setState(
      {
        skill: {
          text: "Skill 1",
          id: this.state.skill.id,
        },
      },
      () => {
        this.setState(
          {
            skillsList: [...this.state.skillsList, this.state.skill],
          },
          () => {
            this.setState({ skill: { text: "", id: uniqid() } });
          }
        );
      }
    );
  }

  handleSaveSkills() {
    this.setState({
      editing: false,
    });
  }

  handleEditSkills() {
    this.setState({
      editing: true,
    });
  }

  editSkill(event) {
    let element = event.target;
    this.setState({
      skillsList: this.state.skillsList.map((skill) => {
        if (skill.id === element.id) {
          skill.text = element.value;
        }
        return skill;
      }),
    });
  }

  deleteSkill(event) {
    this.setState({
      skillsList: this.state.skillsList.filter(
        (skill) => skill.id !== event.target.parentElement.id
      ),
    });
  }

  render() {
    return (
      <div className="skills">
        <h2 className="skills-header">Skills</h2>
        <div className="skills-list">
          {this.state.skillsList.map((skill) => {
            return (
              <Skill
                key={skill.id}
                skill={skill}
                editing={this.state.editing}
                editSkill={this.editSkill}
                deleteSkill={this.deleteSkill}
              />
            );
          })}
        </div>
        {this.state.skillsList.length < 9 && (
          <div className="addSkill" onClick={this.addSkill}>
            Add Skill
          </div>
        )}
        {this.state.editing ? (
          <div className="saveSkills" onClick={this.handleSaveSkills}>
            Save Changes
          </div>
        ) : (
          this.state.skillsList.length > 0 && (
            <div className="editSkills" onClick={this.handleEditSkills}>
              Edit Skills
            </div>
          )
        )}
      </div>
    );
  }
}

export default Skills;
