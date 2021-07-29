import React from "react";

export default function Skills(props) {
  const skillCategoryKeys = props.skills;
  const character = props.character;

  const skillStyle = {
    // borderBottom: '1px solid #66FCF1',
  }

  const skillsContainerStyle = {
    height: '600px',
    overflow: 'scroll'
  }

  function getProficiency(value) {
    if (value == 1) {
      return 'Proficient'
    } else if (value == 2) {
      return 'Expert'
    } else {
      return 'Not Proficient'
    }
  }

  return (
    <div className="container flexBoxColumn flexGrow1" style={skillsContainerStyle}>
      {skillCategoryKeys.map((skillCategory, i) => {
        let skillKeys = Object.keys(character.skills[skillCategory]);
        return skillKeys.map((skill, i) => {
          return (
            <div>
            <div className={"flexBoxRow flexGrow1"} style={skillStyle} key={i}>
              <p className="flexGrow1">{skill}</p>
              <p className="flexGrow1">{getProficiency(character.skills[skillCategory][skill])}</p>
            </div>
            <div className="flexGrow1" style={{borderBottom: '1px solid #66FCF1', height: '1px'}}> </div>
            </div>
          );
        });
      })}
    </div>
  );
}
