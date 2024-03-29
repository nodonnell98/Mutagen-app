import React from 'react'

export default function Class(props) {

  const classification = props.classification

  const classInfoStyle = {
    marginTop: '2%',
    color: '#71f1e8',
  }

  return (
    <div className="flexBoxRow" style={{alignItems: 'center'}}>
    <div className="flexBoxColumn container glass flexGrow1" style={{width: '50%', padding: '3%'}} >
      <h1 style={classInfoStyle} className="flexGrow1">{classification.name}</h1>
      <h3 style={classInfoStyle } className="flexGrow1">{classification.description}</h3>
      <h3 style={classInfoStyle } className="flexGrow1">Strike: {classification.strike_stat ? classification.strike_stat.toUpperCase() :  classification.strike_stat}</h3>
      <h3 style={classInfoStyle } className="flexGrow1">Might: {classification.might_stat ? classification.might_stat.toUpperCase() :  classification.might_stat}</h3>
      <h3 style={classInfoStyle } className="flexGrow1">Dodge: {classification.dodge_stat ? classification.dodge_stat.toUpperCase() :  classification.dodge_stat}</h3>
      <h3 style={classInfoStyle } className="flexGrow1">Gene Pool: {classification.gene_pool}</h3>
    </div>
    <img src="/images/characters/nova2.png" alt="class character art" className="flexGrow1" style={{width: '5em', transform: 'translateX(-50px)'}}></img>
    </div>
  )
}
