import Layout from "../../components/layout/Layout";
import TrailList from "../../components/trail/TrailList";
import Head from "../../node_modules/next/head";
import Col from "../../node_modules/react-bootstrap/esm/Col";
import Container from "../../node_modules/react-bootstrap/esm/Container";
import Row from "../../node_modules/react-bootstrap/esm/Row";

const TrailsIndex = () => {
  return (
    <>
      <Head>
        <title>
          All Hikes | Thru Hike Info | Info for planning your next big thru hike
        </title>
        <meta
          name="description"
          content="Infomation to help you plan your next big thru hike. If you can't find the info you are looking for here, let us know and we will add it!"
        ></meta>
      </Head>
      <Layout>
        <Container>
          <Row>
            <Col>
              <TrailList />
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default TrailsIndex;
