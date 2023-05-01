import react, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Skill = (props) => {
  const { skill } = props;

  return props.editing ? (
    <input
      className="skillInput"
      value={skill.text}
      key={skill.id}
      id={skill.id}
      onChange={props.editSkill}
    />
  ) : (
    <div className="skill" key={skill.id} id={skill.id}>
      {skill.text};
      <FontAwesomeIcon
        icon={faX}
        className="deleteSkill deleteSkillWrapper"
        onClick={props.deleteSkill}
      />
    </div>
  );
};

export default Skill;
