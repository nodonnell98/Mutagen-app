import React, { useState } from "react";
// import { Document, Page } from "react-pdf/dist/umd/entry.webpack";

export default function DocumentContainer(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    // <Document file={`./pdfs/${props.fileName}.pdf`} onLoadSuccess={onDocumentLoadSuccess}>
    //   {Array.apply(null, Array(numPages))
    //     .map((x, i) => i + 1)
    //     .map((page) => (
    //       <Page pageNumber={page} />
    //     ))}
    // </Document>
    <div></div>
  );
}
