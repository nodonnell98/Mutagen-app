import React from 'react'

export default function TraitCard(props) {

  const trait = props.trait
  const value = props.value

  const traitCardStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minWidth: '150px',
    height: '100px',
    flex: '1',
    margin: '2%'
  }

  const traitHeaderStyle = {
    fontSize: '20px'
  }

  return  (
    <div className="container" style={traitCardStyle}>
      <h1 style={traitHeaderStyle}>{trait}</h1>
      <p>{value}</p>
    </div>
  )
}
