import { useState } from "react";
import Layout from "../components/layout/Layout";
import SlangCard from "../components/SlangCard";
import { slang } from "../data/slang";
import Head from "../node_modules/next/head";
import Col from "../node_modules/react-bootstrap/esm/Col";
import Container from "../node_modules/react-bootstrap/esm/Container";
import Row from "../node_modules/react-bootstrap/esm/Row";

// TODO: add next.js static props and other static site gen components
const Slang = () => {
  const [slangList, setSlangList] = useState(
    slang.sort((a, b) => a.term.localeCompare(b.term))
  );
  return (
    <>
      <Head>
        <title>Trail Slang Dictionary | Thru Hike Info | Hiker lingo you want to know</title>
        <meta
        name="description"
        content="A dictionary of hiking trail slang. Seasoned thru hikers have a lingo all their own. Please let us know if there is some slang we missed."
      ></meta>
      </Head>
      <Layout>
        <Container>
          <Row>
            <Col className="mb-3" lg={{ span: 6, offset: 3 }}>
              <h1 className="text-center">Trail Slang Dictionary</h1>
              <p className="text-center"></p>
              <p>
                Hikers have a lingo all their own. Those new to the hiking
                community may not be familiar with certain terms. Hopefully,
                this dictionary can help anyone who hears a term they don't
                recognize get some clarity. Know that this list is missing
                something? <a href="/submission">Submit a new term.</a>
              </p>
            </Col>
            {slangList.map((s) => (
              <Col lg={{ span: 6, offset: 3 }} key={s.term}>
                <SlangCard slang={s} />
              </Col>
            ))}
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default Slang;
