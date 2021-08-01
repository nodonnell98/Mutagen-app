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
      <h3 style={classInfoStyle } className="flexGrow1">Strike Stat: {classification.strike_stat}</h3>
      <h3 style={classInfoStyle } className="flexGrow1">Might Stat: {classification.might_stat}</h3>
      <h3 style={classInfoStyle } className="flexGrow1">Dodge Stat: {classification.dodge_stat}</h3>
      <h3 style={classInfoStyle } className="flexGrow1">Gene Pool: {classification.gene_pool}</h3>


    </div>
  )
}
