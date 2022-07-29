import Card from "../node_modules/react-bootstrap/esm/Card";

const SlangCard = ({ slang: { term, definition } }) => (
  <Card className="mb-3 shadow-sm">
    <Card.Body>
      <Card.Title style={{ textTransform: "capitalize", fontWeight: 700 }}>
        {term}
      </Card.Title>
      <Card.Text>{definition}</Card.Text>
    </Card.Body>
  </Card>
);

export default SlangCard;
