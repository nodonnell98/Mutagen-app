import React, { useState, useCallback } from "react";
import { Form, Button } from "react-bootstrap";

import CharacterService from "../../services/character.service";

export default function CharacterForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  let params = {
    name: name,
    description: description,
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
    [name, description]
  );

  function validateForm() {
    return name.length > 0;
  }

  return (
    <div className="flexBoxColumn" style={{padding: '5%'}}>
      <h1 className="flexGrow1" style={{ fontSize: '20px' }}>Create Character</h1>
      <Form className="flexGrow1" onSubmit={onSubmit}>
        <Form.Group size="lg" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            style={{ textAlign: "center", backgroundColor: '#224e4c', color: 'white' }}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            autoFocus
            style={{ textAlign: "center", backgroundColor: '#224e4c', color: 'white' }}
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
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
