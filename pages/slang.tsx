import { useState } from "react";
import Layout from "../components/Layout";
import SlangCard from "../components/SlangCard";
import { slang } from "../data/slang";
import Col from "../node_modules/react-bootstrap/esm/Col";
import Container from "../node_modules/react-bootstrap/esm/Container";
import Row from "../node_modules/react-bootstrap/esm/Row";

const Slang = () => {
  const [slangList, setSlangList] = useState(
    slang.sort((a, b) => a.term.localeCompare(b.term))
  );
  return (
    <Layout>
      <Container>
        <Row>
          <Col className="mb-3" lg={{ span: 6, offset: 3 }}>
            <h1 className="text-center">Trail Slang Dictionary</h1>
            <p className="text-center"></p>
            <p>
              Hikers have a lingo all their own. Those new to the hiking
              community may not be familiar with certain terms. Hopefully, this
              dictionary can help anyone who hears a term they don't recognize
              get some clarity. Know that this list is missing something?{" "}
              <a href="/submission">Submit a new term.</a>
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
  );
};

export default Slang;
