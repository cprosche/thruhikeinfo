import BudgetCalculator from "../components/budget/BudgetCalculator";
import Layout from "../components/layout/Layout";
import Head from "../node_modules/next/head";
import Col from "../node_modules/react-bootstrap/esm/Col";
import Container from "../node_modules/react-bootstrap/esm/Container";
import Row from "../node_modules/react-bootstrap/esm/Row";

const Budget = () => (
  <>
    <Head>
      <title>
        Thru Hike Budget Calculator | Thru Hike Info | Calculate the cost of a
        thru hike
      </title>
      <meta
        name="description"
        content="Calculate how much it will cost to thru hike a trail. The cost of a thru hike can be surprising..."
      ></meta>
    </Head>
    <Layout>
      <Container>
        <Row>
          <Col className="py-5">
            <BudgetCalculator />
          </Col>
        </Row>
      </Container>
    </Layout>
  </>
);

export default Budget;
