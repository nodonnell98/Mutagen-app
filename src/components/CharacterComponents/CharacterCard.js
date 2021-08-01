import React, { useState, useCallback, useEffect } from "react";
import { Card } from "react-bootstrap";

export default function CharacterCard(props) {
  const character = props.character;
  const classifications = props.classifications;

  return (
    <Card style={props.cardStyle}>
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>----------</Card.Text>
        <Card.Text>
          {classifications.map((classItem) => {
            if (classItem.id == character.classification_ids[0]) {
              return classItem.name;
            } else return "";
          })}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
