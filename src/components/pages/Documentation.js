import React, { useState } from "react";
import DocumentContainer from "../DocumentContainer";

export default function Documentation() {
  const [fileName, setFileName] = useState("test");

  return (
    <div className="flexBoxRow" style={{ marginTop: "10vh" }}>
      <div
        className="flexBoxColumn flexGrow1 side-nav"
        style={{ justifyContent: "flex-start" }}
      >
        <p className="primary-font flexGrow1">Welcome to the rules</p>
        <div className="flexGrow1 flexBoxColumn">
          <a
            className="primary-font textGlow flexGrow1"
            onClick={() => setFileName("test")}
          >
            Quick Start
          </a>
          <a
            className="primary-font textGlow flexGrow1"
            onClick={() => setFileName("class")}
          >
            Classifications
          </a>
        </div>

        <span className={"flexGrow3"}></span>
      </div>
      <div className="flexGrow3">
        <DocumentContainer fileName={fileName}></DocumentContainer>
      </div>
    </div>
  );
}
