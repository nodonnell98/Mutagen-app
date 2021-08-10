import React from "react";

export default function TraitCard(props) {
  const trait = props.trait;

  const traitCardStyle = {
    height: "100px",
    margin: "1%",
  };

  const traitHeaderStyle = {
    fontSize: "18px",
    paddingBottom: "5px",
    borderBottom: "1px solid #71f1e8",
  };

  const inputStyle = {
    width: "50%",
    alignSelf: "center",
    textAlign: "center",
    backgroundColor: "transparent",
    color: "#71f1e8",
    border: "0",
    borderBottom: 'none',
    fontSize: '18px',
    borderBottom: "1px solid transparent"
  };

  const inputActiveStyle = {
    width: "50%",
    alignSelf: "center",
    textAlign: "center",
    backgroundColor: "#2f6a67",
    color: "#71f1e8",
    border: "0",
    borderBottom: "1px solid #71f1e8",
    fontSize: '18px'
  };

  const handleChange = event => props.setCharacter({
    ...props.character,
      traits: {
        ...props.character.traits,
        [trait]: event.target.value
      },
    [trait]: event.target.value,
  });

  return (
    <div className="container glass flexGrow1 flexBoxColumn" style={traitCardStyle}>
      <h1 style={traitHeaderStyle}>{trait.toUpperCase()}</h1>
      <input
        type="number"
        disabled={props.edit}
        value={props.character.traits[trait]}
        style={props.edit ? inputStyle : inputActiveStyle}
        onChange={handleChange}
        min='0'
        max='100'
      ></input>
    </div>
  );
}
