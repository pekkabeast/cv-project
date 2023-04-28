import react, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
class Skill extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { skill } = this.props;
    return this.props.editing ? (
      <input
        className="skillInput"
        value={skill.text}
        key={skill.id}
        id={skill.id}
        onChange={this.props.editSkill}
      />
    ) : (
      <div className="skill" key={skill.id} id={skill.id}>
        {skill.text};
        <FontAwesomeIcon
          icon={faX}
          className="deleteSkill deleteSkillWrapper"
          onClick={this.props.deleteSkill}
        />
      </div>
    );
  }
}

export default Skill;
