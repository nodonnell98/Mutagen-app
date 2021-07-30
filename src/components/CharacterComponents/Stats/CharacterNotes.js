import React from 'react'

export default function CharacterNotes(props) {
  const description = props.description
  return (
    <div class="flexBoxColumn container flexGrow1" style={{alignItems: 'flex-start', height: '600px', justifyContent: 'flex-start', paddingTop: '2%'}}>
      <h1 style={{borderBottom: '1px solid #66FCF1', marginBottom: '5%'}}>Description</h1>
      <p>{description}</p>
    </div>
  )
}
