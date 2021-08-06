import React from "react";

export default function Skills(props) {
  const character = props.character;
  const skillCategoryKeys = Object.keys(character.skills);

  const skillStyle = {
    display: 'flex',
    // borderBottom: '1px solid #66FCF1'
    alignItems: 'center',
    paddingTop: '5px'
  };

  const skillsContainerStyle = {
    height: "500px",
    overflow: "scroll",
    marginRight: "2%",
    marginLeft: "2%",
    display: 'block'
  };

  function profStyle(value) {
    const prof = {
      color: "#33ff33",
    };

    const expert = {
      color: "#ffa31a",
    };
    if (value == 1) {
      return prof;
    } else if (value == 2) {
      return expert;
    } else {
      return;
    }
  }

  function getProficiency(value) {
    if (value == 1) {
      return "Proficient";
    } else if (value == 2) {
      return "Expert";
    } else {
      return "Not Proficient";
    }
  }

  return (
    <div
      className="container flexBoxColumn flexGrow1"
      style={skillsContainerStyle}
    >
      {skillCategoryKeys.map((skillCategory, i) => {
        let skillKeys = Object.keys(character.skills[skillCategory]);
        return skillKeys.map((skill, i) => {
          return (
            <div>
              <div
                className={"flexBoxRow flexGrow1"}
                style={skillStyle, {borderBottom: '1px solid #66FCF1'}}
                key={i}
              >
                <p className="flexGrow1">{skill.toUpperCase()}</p>
                <p
                  className="flexGrow1"
                  style={profStyle(character.skills[skillCategory][skill])}
                >
                  {getProficiency(character.skills[skillCategory][skill])}
                </p>
              </div>

            </div>
          );
        });
      })}
    </div>
  );
}
