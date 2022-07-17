import { useEffect, useState } from "react";
import TrailCard from "./TrailCard";
import { trails } from "../data/trails";
import Container from "../node_modules/react-bootstrap/esm/Container";
import Row from "../node_modules/react-bootstrap/esm/Row";
import Col from "../node_modules/react-bootstrap/esm/Col";
import FormControl from "../node_modules/react-bootstrap/esm/FormControl";

// TODO: add more filtering and sorting options
// TODO: change search to just display none components
const TrailList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [trailsList, setTrailsList] = useState(trails);

  // filters based on search term
  useEffect(() => {
    if (searchTerm === "") {
      setTrailsList(trails);
    } else {
      const newTrailList = trails.filter((trail) =>
        trail.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setTrailsList(newTrailList);
    }
  }, [searchTerm, setTrailsList]);

  return (
    <Container className="mt-5" id="hikes">
      <Row>
        <Col lg={12} className="text-center">
          <h2 className="mb-0">Thru Hikes</h2>
          <p>{trails.length} hikes total</p>
        </Col>
        <Col lg={{ span: 6, offset: 3 }} style={{ minHeight: 500 }}>
          <FormControl
            className="mb-3"
            placeholder="Search by trail name"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          {trailsList.length > 0 ? (
            trailsList.map((trail, index) => (
              <TrailCard trail={trail} key={trail.name} />
            ))
          ) : (
            <div>No results</div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default TrailList;
