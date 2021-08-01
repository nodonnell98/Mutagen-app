import React, { useState, useCallback, useEffect } from "react";
import { Form, Button, Dropdown } from "react-bootstrap";

import CharacterService from "../../services/character.service";
import ClassificationService from "../../services/classification.service";

export default function CharacterForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [classification_id, setClassificationId] = useState()
  const [classifications, setClassifications] = useState([])
  const [label, setLabel] = useState('Select Class')


  const retrieveClassifications = useCallback(() => {
    ClassificationService.index().then((response) => {
      setClassifications(response.data);

    });
  }, [setClassifications]);

  // Fetch list of characters on load
  useEffect(() => {
    retrieveClassifications();
  }, [retrieveClassifications]);

  let params = {
    character: {
      name: name,
      classification_ids: [classification_id]
    }
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      CharacterService.create(params)
        .then((e) => {
          window.location.replace("/character/" + e.data.id);
        })
        .catch((e) => {
          setError(e.response.data.errors);
        });
    },
    [name, classification_id]
  );

  function validateForm() {
    return name.length > 0 && classification_id != undefined;
  }

  return (
    <div className="flexBoxColumn" style={{ padding: "5%" }}>
      <h1 className="flexGrow1" style={{ fontSize: "20px" }}>
        Create Character
      </h1>
      <Form className="flexGrow1" onSubmit={onSubmit}>
        <Form.Group size="lg" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            style={{
              textAlign: "center",
              backgroundColor: "#224e4c",
              color: "white",
            }}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="description">
          <Form.Label>Class</Form.Label>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {label}
            </Dropdown.Toggle>

            <Dropdown.Menu>

              { classifications.map((classificationArr, i) => {
                return (
                  <Dropdown.Item href="#/action-1" key={i} onClick={()=> setLabel(classificationArr.name)} onSelect={() => setClassificationId(classificationArr.id)}>{classificationArr.name}</Dropdown.Item>
                )
              })}
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>

        <Button
          block
          size="lg"
          type="submit"
          style={{
            marginTop: "2%",
            marginBottom: "2%",
            backgroundColor: "#66FCF1",
            color: " white",
            border: "none",
            cursor: "pointer",
          }}
          disabled={!validateForm()}
        >
          Create
        </Button>
      </Form>
    </div>
  );
}
