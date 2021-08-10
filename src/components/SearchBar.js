import React from 'react';

export default function SearchBar(props) {
    return (
        <div>
            <input style={searchStyle} maxLength="14" onChange={props.handleSearch} type='text' placeholder="Search by name"></input>
        </div>
    )
}

const searchStyle = {
    width: '90%',
    marginTop: '1em',
    marginBottom: '1em',
    border: '2px solid #71f1e8',
    height: '2em',
    textAlign: 'center',
    backgroundColor: ' #303a46',
    color: '#71f1e8',
    borderRadius: '50px',
    outline: 'none'
}
