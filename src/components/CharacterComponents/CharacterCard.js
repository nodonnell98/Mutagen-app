import React from 'react'
import { Card } from 'react-bootstrap'

export default function CharacterCard(props) {

  console.log(props.characters)
  const character = props.characters

  if (character != 'undefined') {
    return(
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{character.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Noodle</Card.Subtitle>
          <Card.Text>
          {character.description}
          </Card.Text>
          <Card.Link href="#">See more ></Card.Link>
        </Card.Body>
      </Card>
    )
  } else
  return(
    <div>Hello</div>
  )
}
