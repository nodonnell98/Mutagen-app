import React from "react";

export default function Skill(props) {
  const character = props.character;
  const skill = props.skill;
  const skillIndex = props.skillIndex;

  let skillArr = [0, 1, 2];

  function getProficiency(value) {
    if (value === 1) {
      return "Proficient";
    } else if (value === 2) {
      return "Expert";
    } else {
      return "Not Proficient";
    }
  }

  function profStyle(value) {
    const prof = {
      color: "#33ff33",
    };

    const expert = {
      color: "#ffa31a",
    };
    if (value === 1) {
      return prof;
    } else if (value === 2) {
      return expert;
    } else {
      return;
    }
  }

  skillArr.forEach((val, i) => {
    if (val === character.skills[skill]) {
      skillArr.splice(i, 1);
      skillArr.unshift(val);
    }
  });

  const convertText = (txt) => {
    if (txt === 'Proficient') {
      return 1;
    } else if (txt ==='Expert') {
      return 2;
    } else {
      return 0;
    }
  }

  const handleChange = event =>
    props.setCharacter({
    ...props.character,
      skills: {
        ...props.character.skills,
        [skill]: convertText(event.target.value)
      },
    [skill]: convertText(event.target.value)
  })
;

  return (
    <div
      className={"flexBoxRow flexGrow1"}
      style={{ borderBottom: "1px solid #71f1e8", alignItems: 'center' }}
      key={skillIndex}
    >
      <p className="flexGrow1" style={{textAlign: 'start', margin: '0', fontSize: '20px', marginTop: '0.2em', marginBottom: '0.2em'}}>{skill.toUpperCase()}</p>
      <select
        disabled={props.edit}
        className={props.edit ? "flexGrow1 select-disabled" : "flexGrow1 select-active" }
        style={profStyle(character.skills[skill])}
        onChange={(event) => {handleChange(event)}}
        value={character.skills[skill]}
      >
        {skillArr.map((skillVal, i) => {
          return (
            <option key={i} value={getProficiency(skillVal)}>
            {getProficiency(skillVal)}
            </option>
          );
        })}
      </select>
    </div>
  );
}
