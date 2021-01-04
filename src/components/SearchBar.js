import React, {Component} from 'react';

export default function SearchBar(props) {
    return (
        <div>
            <input style={searchStyle} onChange={props.handleSearch} type='text' placeholder="Search"></input>
        </div>
    )
}

const searchStyle = {
    width: '80%',
    marginTop: '2em',
    marginBottom: '1em',
    border: '2px solid #66FCF1',
    height: '2em',
    textAlign: 'center',
    backgroundColor: ' #2a615e',
    color: '#66FCF1',
    fontFamily: 'Orbitron'
}