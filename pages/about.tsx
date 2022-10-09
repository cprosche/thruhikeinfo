import Layout from "../components/layout/Layout";
import Head from "../node_modules/next/head";
import Col from "../node_modules/react-bootstrap/esm/Col";
import Container from "../node_modules/react-bootstrap/esm/Container";
import Row from "../node_modules/react-bootstrap/esm/Row";

// TODO: make less ugly
const About = () => {
  return (
    <>
      <Head>
        <title>
          About | Thru Hike Info | Info to help you plan your next thru hike
        </title>
        <meta
          name="description"
          content="Info to help you plan your next thru hike. Appalachian Trail, Pacific Crest Trail, or Te Araroa..."
        ></meta>
      </Head>
      <Layout>
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="pt-3 fs-5">
              <h1 className="mb-3">About Thru Hike Info</h1>
              <h2>What is thruhike.info?</h2>
              <p>It is a site to help you plan your next thruhike!</p>
              <p>
                The goal of this site is to be the best and first place to come
                to when you are trying to figure out what thruhike you want to
                do next.
              </p>
              <p>
                You can find a list of options here: <a href="/hikes">Hikes</a>
              </p>
              <p>
                The list on the above page has many filtering options to help
                you find a hike that matches what you are looking for.
              </p>
              <p>
                You can use this calulator to help you plan your budget for your
                hike: <a href="/budget">Thru Hike Budget Calculator</a>
              </p>
              <h2>Who created this site?</h2>
              <p>
                I did! I'm <a href="https://www.caderosche.dev/">Cade Rosche</a>
                , an avid hiker and web developer.
              </p>
              <p>
                I built this because I was tired of going to hundreds of
                different sites just to figure out what my options for a hike
                were!
              </p>
              <p>
                Currently I am the only person running and maintaining this
                site, but if you would like to help, you can suggest changes or
                submit trails <a href="/submission">here</a>, or submit a pull
                request{" "}
                <a href="https://github.com/cprosche/thruhikeinfo">here</a>.
              </p>
              <h2>What's the plan for this site?</h2>
              <p>
                Continuous improvement of exisiting pages, adding more trails,
                and adding more tools to help you plan your next hike.
              </p>
              <p>Some ideas for improvements are:</p>
              <ul>
                <li>A map displaying all the hikes on the site.</li>
                <li>A basic map for each individual trail.</li>
                <li>Suggested section hikes for each trail.</li>
                <li>
                  Links to mapping resources that are usable for a thruhike.
                </li>
                <li>"Reviews" of each trail.</li>
                <li>And more!</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default About;
