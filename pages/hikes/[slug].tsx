import Layout from "../../components/layout/Layout";
import { trails } from "../../data/trails";
import Col from "../../node_modules/react-bootstrap/esm/Col";
import Container from "../../node_modules/react-bootstrap/esm/Container";
import Row from "../../node_modules/react-bootstrap/esm/Row";

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

// TODO: add trail subsections as seperate trails on individual pages
// TODO: add links to multiple maps on individual pages
const TrailPage = ({ trail }) => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col style={{ minHeight: "78vh" }}>
            <h1 className="mt-5">{trail.name}</h1>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default TrailPage;
