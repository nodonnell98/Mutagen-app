import React from 'react'

export default function CharacterNotes(props) {
  const textAreaStyle = {
    background: '#224e4c',
    color: '#66FCF1',
    border: 'none',
    border: '1px solid #66FCF1',
    width: '100%',
    minHeight: '60%',
    fontSize: '20px'
  }
  const textDisabled = {
    background: 'none',
    width: '100%',
    minHeight: '60%',
    fontSize: '20px'
  }

  const handleChange = event => props.setCharacter({
    ...props.character,

    description: event.target.value,
  });

  return (
    <div class="flexBoxColumn container flexGrow1" style={{ height: '500px', justifyContent: 'flex-start', paddingTop: '2%'}}>
      <h1 style={{borderBottom: '1px solid #66FCF1', marginBottom: '5%'}}>Description</h1>
      <textarea placeholder="Enter a description..." cols="40" wrap="hard" disabled={props.edit} value={props.character.description} onChange={handleChange} style={ props.edit ? textDisabled : textAreaStyle}></textarea>
    </div>
  )
}
