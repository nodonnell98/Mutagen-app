import React from 'react'

export default function TraitCard(props) {

  const trait = props.trait
  const value = props.value

  const traitCardStyle = {
    height: '100px',
    margin: '1%'
  }

  const traitHeaderStyle = {
    fontSize: '12px',
    paddingBottom: '5px',
    borderBottom: '1px solid #66FCF1'
  }

  return  (
    <div className="container flexGrow1 flexBoxColumn" style={traitCardStyle}>
      <h1 style={traitHeaderStyle}>{trait.toUpperCase()}</h1>
      <p>{value}</p>
    </div>
  )
}
