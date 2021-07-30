import React from 'react'

export default function CharacterNavLinks(props) {

  const navLinkStyle = {
    color: "#66FCF1",
    marginRight: '10%',
    cursor: 'pointer',
    fontSize: '20px'
  }
  return (
    <div className="flexBoxRow flexGrow1">
       <a className="flexGrow1 textGlow " style={navLinkStyle} onClick={() => props.setView('stats')}>Overview</a>
        <a className="flexGrow1 textGlow" style={navLinkStyle}>Class</a>
        <a className="flexGrow1 textGlow" style={navLinkStyle} onClick={() => props.setView('inventory')}>Inventory</a>
    </div>
  )
}
