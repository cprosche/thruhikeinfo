import Hero from "../components/layout/Hero";
import Layout from "../components/layout/Layout";
import Head from "../node_modules/next/head";
import Col from "../node_modules/react-bootstrap/esm/Col";
import Container from "../node_modules/react-bootstrap/esm/Container";
import Image from "../node_modules/react-bootstrap/esm/Image";
import Row from "../node_modules/react-bootstrap/esm/Row";

// TODO: add more words for SEO
const Home = () => (
  <>
    <Head>
      <title>
        Home | Thru Hike Info | Info for planning your next big thru hike
      </title>
      <meta
        name="description"
        content="Information to help you plan your next big thru hike. If you can't find the info you are looking for here, let us know and we will add it!"
      />
    </Head>
    <Layout>
      <Hero />
      <Container>
        <Row style={{ margin: "150px 0px" }}>
          <Col
            lg={6}
            className="order-1 order-lg-0 my-3 d-flex justify-content-left align-items-center"
          >
            <div>
              <h2>Check out the list of thru hikes!</h2>
              <p>
                You can use the filters on our list of thru hikes to help you
                find the hike that will fit in your schedule, or the amount of
                challenge that you are looking for.
              </p>
              <a
                type="button"
                className="btn btn-secondary btn-lg px-4"
                href="hikes"
              >
                Go To Hikes List
              </a>
            </div>
          </Col>
          <Col lg={6} className="order-0 order-lg-1">
            <Image fluid src="/map-book.jpg" />
          </Col>
        </Row>
        <Row style={{ margin: "150px 0px" }}>
          <Col lg={6}>
            <Image fluid src="/trees.jpg" />
          </Col>
          <Col
            lg={6}
            className="my-3 d-flex justify-content-left align-items-center"
          >
            <div>
              <h2>Learn some hiker slang!</h2>
              <p>
                You probably didn't know that hiker have a lingo all their own.
                To get familiar with some of it, visit our hiker slang
                dictionary.
              </p>
              <a
                type="button"
                className="btn btn-secondary btn-lg px-4"
                href="slang"
              >
                Go To Hiker Slang Dictionary
              </a>
            </div>
          </Col>
        </Row>
        <Row style={{ margin: "150px 0px" }}>
          <Col
            lg={6}
            className="order-1 order-lg-0 my-3 d-flex justify-content-left align-items-center"
          >
            <div>
              <h2>Calculate your hiking budget!</h2>
              <p>
                Figure out your budget for your hike, and how much you might
                need to save for travel, food, hotels, and gear.
              </p>
              <a
                type="button"
                className="btn btn-secondary btn-lg px-4"
                href="budget"
              >
                Go To Budget Calculator
              </a>
            </div>
          </Col>
          <Col lg={6} className="order-0 order-lg-1">
            <Image fluid src="/view.jpg" />
          </Col>
        </Row>
      </Container>
    </Layout>
  </>
);

export default Home;
