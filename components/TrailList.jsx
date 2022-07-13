import { useEffect, useState } from "react";
import { Col, Container, FormControl, Row } from "react-bootstrap";
import TrailCard from "./TrailCard";
import { trails } from "data/trails";

// TODO: add more filtering and sorting options
// TODO: fix search
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
            placeholder="Search"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          {trailsList.length > 0 ? (
            trailsList.map((trail, index) => (
              <TrailCard trail={trail} key={index} />
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
