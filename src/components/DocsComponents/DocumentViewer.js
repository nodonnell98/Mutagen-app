import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const DocumentViewer = ({ document }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      if (document) {
        try {
          const response = await fetch(`/api/convert/${document.folder}/${document.filename}`);
          console.log(response);
          const markdown = await response.text();
          setContent(markdown);
        } catch (error) {
          console.error('Error fetching content:', error);
        }
      }
    };

    fetchContent();
  }, [document]);

  if (!document) {
    return <div>Select a document to view its content</div>;
  }

  return (
    <div className="document-viewer">
      <h1>{document.title}</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default DocumentViewer;
