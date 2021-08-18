import React from "react";
import Skill from './Skill.js';

export default function Skills(props) {
  const character = props.character;
  const skillKeys = Object.keys(character.skills);



  const skillsContainerStyle = {
    height: "500px",
    overflow: "scroll",
    marginRight: "2%",
    marginLeft: "2%",
    display: 'block'
  };





  return (
    <div
      className="container glass flexBoxColumn flexGrow1"
      style={skillsContainerStyle}
    >
      {skillKeys.map((skill, i) => {
          return (
            <div>
              <Skill skill={skill} character={character} skillIndex={i} edit={props.edit} setCharacter={props.setCharacter}></Skill>
            </div>
          );
        })}

    </div>
  );
}
