import { Card } from "react-bootstrap";
import FavouriteButton from "./FavouriteButton";
import DeleteCharacter from "./DeleteCharacter";

export default function CharacterCard(props) {
  const character = props.character;
  const classifications = props.classifications;

  return (
    <Card style={props.cardStyle} className="glass">
      <Card.Body>
        <Card.Title><h1>{character.name}</h1></Card.Title>
        <Card.Text>----------</Card.Text>
        <Card.Text>
          {classifications.map((classItem) => {
            if (classItem.id === character.classification_ids[0]) {
              return classItem.name;
            } else return "";
          })}
        </Card.Text>
        <div className="flexBoxColumn" style={{width: '40%', alignItems: 'center', paddingLeft: '50%'}}>
        <FavouriteButton character={character} retrieveCharactersInformation={props.retrieveCharactersInformation}></FavouriteButton>
        {/* <button className="primary-button no-fill-delete" onClick={() => handleDelete()} style={{marginTop: '1em'}}>Delete</button> */}
        <DeleteCharacter id={character.id}></DeleteCharacter>
        </div>
      </Card.Body>
    </Card>
  );
}
