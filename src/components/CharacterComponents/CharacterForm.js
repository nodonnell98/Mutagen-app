import React, { useState } from "react";
import { Form, Button, Dropdown } from "react-bootstrap";

import CharacterService from "../../services/character.service";

export default function CharacterForm(props) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [label, setLabel] = useState("Select Class");

  const classification_id = props.classification_id;
  const classifications = props.classifications;
  const setClassificationId = props.setClassificationId;

  let params = {
    character: {
      name: name,
      classification_ids: [classification_id],
    },
  };

  const onSubmit = (e) => {
    e.preventDefault();

    CharacterService.create(params)
      .then((e) => {
        window.location.replace("/character/" + e.data.id);
      })
      .catch((e) => {
        setError(e.response.data.errors);
        console.log(error);
      });
  };
  function validateForm() {
    return name.length > 0 && classification_id !== undefined;
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
            maxLength="7"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="class">
          <Form.Label>Class</Form.Label>
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              style={{
                backgroundColor: "#71f1e8",
                border: "#71f1e8",
                color: "#2a615e",
              }}
            >
              {label}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {classifications.map((classificationArr, i) => {
                return (
                  <Dropdown.Item
                    href="#/action-1"
                    key={i}
                    onClick={() => setLabel(classificationArr.name)}
                    onSelect={() => setClassificationId(classificationArr.id)}
                  >
                    {classificationArr.name}
                  </Dropdown.Item>
                );
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
            backgroundColor: "#71f1e8",
            color: "#2a615e",
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
