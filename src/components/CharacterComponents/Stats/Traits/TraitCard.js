import React from "react";

export default function TraitCard(props) {
  const trait = props.trait;
  const value = props.value;

  const traitCardStyle = {
    height: "100px",
    margin: "1%",
  };

  const traitHeaderStyle = {
    fontSize: "12px",
    paddingBottom: "5px",
    borderBottom: "1px solid #66FCF1",
  };

  const inputStyle = {
    width: "50%",
    alignSelf: "center",
    textAlign: "center",
    backgroundColor: "transparent",
    color: "#66FCF1",
    border: "0",
    borderBottom: 'none'
  };

  const inputActiveStyle = {
    width: "50%",
    alignSelf: "center",
    textAlign: "center",
    backgroundColor: "#2f6a67",
    color: "#66FCF1",
    border: "0",
    borderBottom: "1px solid #66FCF1",
    marginLeft: "15px",
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
    <div className="container flexGrow1 flexBoxColumn" style={traitCardStyle}>
      <h1 style={traitHeaderStyle}>{trait.toUpperCase()}</h1>
      <input
        type="number"
        disabled={props.edit}
        value={props.character.traits[trait]}
        style={props.edit ? inputStyle : inputActiveStyle}
        onChange={handleChange}
      ></input>
    </div>
  );
}
