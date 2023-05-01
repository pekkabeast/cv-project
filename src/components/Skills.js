import react, { useState } from "react";
import Skill from "./Skill";
import uniqid from "uniqid";
import "../styles/Skills.css";

const Skills = () => {
  const [skillsList, setSkillsList] = useState([]);

  const [editing, setEditing] = useState(false);

  function addSkill() {
    setSkillsList([
      ...skillsList,
      {
        text: "Skill 1",
        id: uniqid(),
      },
    ]);
  }

  function handleSaveSkills() {
    setEditing(false);
  }

  function handleEditSkills() {
    setEditing(true);
  }

  function editSkill(event) {
    let element = event.target;
    setSkillsList(
      skillsList.map((skill) => {
        if (skill.id === element.id) {
          skill.text = element.value;
        }
        return skill;
      })
    );
  }

  function deleteSkill(event) {
    setSkillsList(
      skillsList.filter((skill) => skill.id !== event.target.parentElement.id)
    );
  }

  return (
    <div className="skills">
      <h2 className="skills-header">Skills</h2>
      <div className="skills-list">
        {skillsList.map((skill) => {
          return (
            <Skill
              key={skill.id}
              skill={skill}
              editing={editing}
              editSkill={editSkill}
              deleteSkill={deleteSkill}
            />
          );
        })}
      </div>
      {skillsList.length < 9 && (
        <div className="addSkill" onClick={addSkill}>
          Add Skill
        </div>
      )}
      {editing ? (
        <div className="saveSkills" onClick={handleSaveSkills}>
          Save Changes
        </div>
      ) : (
        skillsList.length > 0 && (
          <div className="editSkills" onClick={handleEditSkills}>
            Edit Skills
          </div>
        )
      )}
    </div>
  );
};

export default Skills;
