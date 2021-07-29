import React, {useEffect} from "react";
import { Card } from "react-bootstrap";

export default function CharacterCard(props) {
  const character = props.character;

  return (
    <Card style={props.cardStyle}>
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>----------</Card.Text>
        <Card.Text>{character.description}</Card.Text>
        <Card.Text>----------</Card.Text>
        <Card.Text>Class: Coming Soon</Card.Text>
      </Card.Body>
    </Card>
  );
}
