import Layout from "../components/layout/Layout"
import Head from "../node_modules/next/head"
import Col from "../node_modules/react-bootstrap/esm/Col"
import Container from "../node_modules/react-bootstrap/esm/Container"
import Row from "../node_modules/react-bootstrap/esm/Row"

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
          <Col>
          </Col>
        </Row>
      </Container>
    </Layout>
  </>
  )
}

export default About