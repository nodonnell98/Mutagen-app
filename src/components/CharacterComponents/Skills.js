import React from "react";

export default function Skills(props) {
  const skillCategoryKeys = props.skills;
  const character = props.character;

  const skillStyle = {
    borderBottom: '1px solid #66FCF1',
    flex: '1',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'no-wrap'
  }

  const skillsContainerStyle = {
    width: '30%',
    height: '400px',
    overflow: 'scroll',
    margin: '0px'
  }

  return (
    <div className="container" style={skillsContainerStyle}>
      {skillCategoryKeys.map((skillCategory, i) => {
        let skillKeys = Object.keys(character.skills[skillCategory]);
        return skillKeys.map((skill, i) => {
          return (
            <div style={skillStyle} key={i}>
              <p style={{flex: '1', margin: '0%', width: '70%'}}>{skill}</p>
              <p style={{flex: '1', margin: '0%', width: '10%'}}>{character.skills[skillCategory][skill]}</p>
            </div>
          );
        });
      })}
    </div>
  );
}
