import React, { useState } from 'react';
import SearchBar from '../SearchBar';
import Sidebar from '../DocsComponents/Sidebar';
import DocumentViewer from '../DocsComponents/DocumentViewer';

const documents = [
  {
    title: 'Main Rules',
    folder: 'Rules',
    filename: 'Mutagen 0.6',
  },
  {
    title: 'Notes',
    folder: 'Playtests',
    filename: 'Notes',
  },
  // ... Add more documents as needed
];

const style = {
  color: 'white'
}

const Documentation = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);

  const handleSelectDoc = (doc) => {
    setSelectedDoc(doc);
  };

  return (
    <div className="app" style={style}>
      <SearchBar
        searchType="documentation"
        documents={documents}
        onSelectDoc={handleSelectDoc}
      />
      <div className="content">
      <Sidebar documents={documents} onSelectDoc={handleSelectDoc} />
        <DocumentViewer document={selectedDoc} />
      </div>
    </div>
  );
};



export default Documentation;
