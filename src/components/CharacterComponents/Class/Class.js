import React, { useState, useCallback, useEffect } from 'react'


export default function Class(props) {

  const character = props.character
  const classification = props.classification

  return (
    <div className="flexBoxColumn">
      <div className="flexBoxRow flexGrow1" style={{justifyContent: 'flex-start'}}>

      </div>
      <h1 style={{color: '#66FCF1'}}>{classification.name}</h1>
      <p style={{color: '#66FCF1', fontSize: '25px'}}>{classification.description}</p>
    </div>
  )
}
