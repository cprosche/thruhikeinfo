import HomeButton from "../../components/HomeButton";
import Layout from "../../components/layout/Layout";
import Head from "../../node_modules/next/head";
import Col from "../../node_modules/react-bootstrap/esm/Col";
import Container from "../../node_modules/react-bootstrap/esm/Container";
import Row from "../../node_modules/react-bootstrap/esm/Row";

const Success = () => (
  <>
    <Head>
      <title>Success | Thru Hike Info</title>
    </Head>
    <Layout>
      <Container>
        <Row>
          <Col
            lg={12}
            style={{ minHeight: "78vh" }}
            className="text-center p-5"
          >
            <h2 className="mt-5">
              Thank you for submitting a hike or change suggestion!
            </h2>
            <div className="mt-4">
              <HomeButton />
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  </>
);

export default Success;
