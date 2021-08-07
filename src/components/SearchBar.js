import React from 'react';

export default function SearchBar(props) {
    return (
        <div>
            <input style={searchStyle} onChange={props.handleSearch} type='text' placeholder="Search by name"></input>
        </div>
    )
}

const searchStyle = {
    width: '90%',
    marginTop: '1em',
    marginBottom: '1em',
    border: '2px solid #66FCF1',
    height: '2em',
    textAlign: 'center',
    backgroundColor: ' #2b343f',
    color: '#66FCF1'
}
