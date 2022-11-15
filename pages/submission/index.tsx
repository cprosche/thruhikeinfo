import Layout from "../../components/layout/Layout";
import Head from "../../node_modules/next/head";
import Button from "../../node_modules/react-bootstrap/esm/Button";
import Col from "../../node_modules/react-bootstrap/esm/Col";
import Container from "../../node_modules/react-bootstrap/esm/Container";
import Form from "../../node_modules/react-bootstrap/esm/Form";
import Row from "../../node_modules/react-bootstrap/esm/Row";

// TODO: form options able to be set from url params
const Submission = () => (
  <>
    <Head>
      <title>New Hike Submission | Thru Hike Info | Submit a new hike</title>
      <meta
        name="description"
        content="Submit a new hike, new trail slang, or correct info that is already here. If there is something you think we missed, please let us know!"
      />
    </Head>
    <Layout>
      <Container>
        <Row>
          <Col lg={{ span: 6, offset: 3 }}>
            <h1 className="text-center mt-5">Submit A New Hike</h1>
            <p className="text-center">
              With this form, you can either suggest an update to the site, to a
              trail, or submit a new trail to be included.
            </p>
            <Form
              name="submit"
              data-netlify="true"
              action="/submission/success"
            >
              <Form.Group className="mb-3" controlId="formOption">
                <Form.Label>Submission type</Form.Label>
                <Form.Select name="submit-type">
                  <option value="new">Submit A New Hike</option>
                  <option value="change">Suggest An Update</option>
                  <option value="new-slang">Submit New Trail Slang</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="changeDescription">
                <Form.Label>
                  Please describe your suggestion, and please include as much
                  infomation as possible.
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="submit-description"
                />
                <Form.Text>
                  If submitting a new trail, please include information such as:
                  trail name, length, location of terminus/es, whether it's a
                  loop or linear, trail association, etc.
                </Form.Text>
              </Form.Group>
              <input type="hidden" name="form-name" value="submit" />
              <Button variant="secondary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  </>
);

export default Submission;
