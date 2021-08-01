import React, { useState, useCallback, useEffect } from 'react'


export default function Class(props) {

  const character = props.character
  const classification = props.classification

  const classInfoStyle = {
    marginTop: '2%',
    color: '#66FCF1',

  }

  return (
    <div className="flexBoxColumn" >
      <h1 style={classInfoStyle} className="flexGrow1">{classification.name}</h1>
      <h3 style={classInfoStyle } className="flexGrow1">{classification.description}</h3>
      <h3 style={classInfoStyle } className="flexGrow1">Strike: {classification.strike_stat.toUpperCase()}</h3>
      <h3 style={classInfoStyle } className="flexGrow1">Might: {classification.might_stat.toUpperCase()}</h3>
      <h3 style={classInfoStyle } className="flexGrow1">Dodge: {classification.dodge_stat.toUpperCase()}</h3>
      <h3 style={classInfoStyle } className="flexGrow1">Gene Pool: {classification.gene_pool}</h3>


    </div>
  )
}
