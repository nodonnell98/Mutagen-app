import React from 'react';

export default function SearchBar(props) {
  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    if (props.searchType === 'weapon') {
      props.setSearchedWeapons(searchTerm);
    } else if (props.searchType === 'character') {
      props.setSearchedCharacters(searchTerm);
    } else if (props.searchType === 'documentation') {
      const filteredDocs = props.documents.filter((doc) =>
        doc.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (filteredDocs.length > 0) {
        props.onSelectDoc(filteredDocs[0]);
      }
    }
  };

  const handleClear = () => {
    if (props.searchType === 'weapon') {
      props.setSearchedWeapons('');
    } else if (props.searchType === 'character') {
      props.setSearchedCharacters('');
    }
    document.getElementById('search').value = '';
  };

  return (
    <div className="flexBoxRow" style={{ alignItems: 'center' }}>
      <input
        style={searchStyle}
        maxLength="14"
        onChange={handleSearch}
        type="text"
        id="search"
        placeholder="Search by name"
      ></input>
      <button
        className="flexGrow1 primary-button fill"
        style={{ marginLeft: '0.5em', borderRadius: '50px' }}
        onClick={() => handleClear()}
      >
        Clear
      </button>
    </div>
  );
}

const searchStyle = {
  width: '90%',
  marginTop: '1em',
  marginBottom: '1em',
  border: '2px solid #71f1e8',
  textAlign: 'center',
  backgroundColor: ' #303a46',
  color: '#71f1e8',
  borderRadius: '50px',
  outline: 'none',
  height: '3em',
  flexGrow: '10',
};
