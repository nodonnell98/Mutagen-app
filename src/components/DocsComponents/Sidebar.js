import React from 'react';

const Sidebar = ({ documents, onSelectDoc }) => {
  const groupedDocuments = documents.reduce((acc, doc) => {
    if (!acc[doc.folder]) {
      acc[doc.folder] = [];
    }
    acc[doc.folder].push(doc);
    return acc;
  }, {});

  return (
    <div className="sidebar">
      {Object.keys(groupedDocuments).map((folder) => (
        <div key={folder} className="section">
          <h2>{folder}</h2>
          <ul>
            {groupedDocuments[folder].map((doc) => (
              <li key={doc.filename} onClick={() => onSelectDoc(doc)}>
                {doc.title}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
