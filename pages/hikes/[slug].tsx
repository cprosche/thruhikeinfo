import Layout from "../../components/layout/Layout";
import { trails } from "../../data/trails";
import Col from "../../node_modules/react-bootstrap/esm/Col";
import Container from "../../node_modules/react-bootstrap/esm/Container";
import Row from "../../node_modules/react-bootstrap/esm/Row";
import { ITrail } from "../../data/trails";

export const getStaticPaths = () => {
  const paths = trails.map((trail) => {
    return {
      params: { slug: trail.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  const slug = context.params.slug;
  const trail = trails.filter((trail) => trail.slug === slug)[0];
  return {
    props: { trail },
  };
};

interface IProps {
  trail: ITrail;
}

// TODO: add trail subsections as seperate trails on individual pages
// TODO: add links to multiple maps on individual pages
const TrailPage = ({ trail }: IProps) => {
  const defaultMileage = 15;
  return (
    <Layout>
      <Container>
        <Row>
          <Col style={{ minHeight: "78vh" }}>
            <h1 className="mt-5">{trail.name}</h1>
            <p>
              The {trail.name} is {trail.length} miles (
              {Math.ceil(trail.length * 1.61)} kilometers) long, and takes {Math.ceil(trail.length / defaultMileage)} days to complete when hiking at an average of {defaultMileage} miles ({Math.ceil(defaultMileage * 1.61)} kilometers) per day.
            </p>
            <h2>Stats</h2>
            <p>Continent: {trail.continent}</p>
            <p>Trail Type: {trail.type}</p>
            <p>
              Length: {trail.length} miles / {Math.ceil(trail.length * 1.61)}{" "}
              kilometers
            </p>
            {trail.type === "Linear" ? (
              <h2>Terminus A</h2>
            ) : (
              <>
                <h2>Recommended Starting Point</h2>
                <p>Name: {trail.terminusA.name}</p>
                <p>City: {trail.terminusA.city}</p>
                <p>Region: {trail.terminusA.region}</p>
                <p>Country: {trail.terminusA.country}</p>
                <p>
                  Latitude / Longitude: {trail.terminusA.location.latitude},{" "}
                  {trail.terminusA.location.longitude}
                </p>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default TrailPage;
