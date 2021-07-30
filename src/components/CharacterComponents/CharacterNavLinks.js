import React from 'react'

export default function CharacterNavLinks() {

  const navLinkStyle = {
    color: "#66FCF1",
    marginRight: '10%',
    cursor: 'pointer'
  }
  return (
    <div className="flexBoxRow flexGrow1">
       <h3 className="flexGrow1 textGlow " style={navLinkStyle}>Overview</h3>
        <h3 className="flexGrow1 textGlow" style={navLinkStyle}>Class</h3>
        <h3 className="flexGrow1 textGlow" style={navLinkStyle}>Inventory</h3>
    </div>
  )
}
