import React, { useCallback } from 'react';

export default function SearchBar(props) {

    const handleClear = useCallback(() => {
        if (props.searchType == 'weapon') {
        props.setSearchedWeapons('')
        } else {
            props.setSearchedCharacters('')
        }
        document.getElementById("search").value = ''
    }, [props.setSearchedWeapons]);

    return (
        <div className="flexBoxRow" style={{alignItems: 'center'}}>
            <input style={searchStyle} maxLength="14" onChange={props.handleSearch} type='text' id="search" placeholder="Search by name"></input>
            <button className="flexGrow1 primary-button fill" style={{marginLeft: '1em', borderRadius: '10px'}} onClick={() => handleClear()}>Clear</button>
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
    outline: 'none',
    height: '3em',
    flexGrow: '10'
}
