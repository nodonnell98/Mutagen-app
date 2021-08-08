import { Card } from "react-bootstrap";
import FavouriteButton from "./FavouriteButton";

export default function CharacterCard(props) {
  const character = props.character;
  const classifications = props.classifications;

  return (
    <Card style={props.cardStyle}>
      <Card.Body>
        <Card.Title><h1>{character.name}</h1></Card.Title>
        <Card.Text>----------</Card.Text>
        <Card.Text>
          {classifications.map((classItem) => {
            if (classItem.id == character.classification_ids[0]) {
              return classItem.name;
            } else return "";
          })}
        </Card.Text>
        <FavouriteButton character={character}></FavouriteButton>
      </Card.Body>
    </Card>
  );
}
