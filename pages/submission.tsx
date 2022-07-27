import Layout from "../components/Layout";
import Button from "../node_modules/react-bootstrap/esm/Button";
import Col from "../node_modules/react-bootstrap/esm/Col";
import Container from "../node_modules/react-bootstrap/esm/Container";
import Form from "../node_modules/react-bootstrap/esm/Form";
import Row from "../node_modules/react-bootstrap/esm/Row";

// TODO: fix based on https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/?_gl=1*coz1k*_gcl_aw*R0NMLjE2NTg4ODQ3NTQuQ2owS0NRandvZjZXQmhENEFSSXNBT2k2NWFnZGhzQzE5TjVfRVF6eEltWGRIdTlBYVpaZkxjSlYxWWpMQ0Z0RDBhOFVoQld4dlJTaU9SSWFBbWxtRUFMd193Y0I.&_ga=2.80914782.816531606.1658884754-1646007439.1652634728&_gac=1.61152734.1658884754.Cj0KCQjwof6WBhD4ARIsAOi65agdhsC19N5_EQzxImXdHu9AaZZfLcJV1YjLCFtD0a8UhBWxvRSiORIaAmlmEALw_wcB
const Submission = () => (
  <Layout>
    <Container>
      <Row>
        <Col lg={{ span: 6, offset: 3 }} style={{ minHeight: "78vh" }}>
          <h1 className="text-center mt-5">Submit A New Hike</h1>
          <p className="text-center">
            With this form, you can either suggest an update to the site, to a
            trail, or submit a new trail to be included.
          </p>
          <Form name="submit" data-netlify="true">
            <Form.Group className="mb-3" controlId="formOption">
              <Form.Label>Submission type</Form.Label>
              <Form.Select>
                <option value="new">Submit A New Hike</option>
                <option value="change">Suggest An Update</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="changeDescription">
              <Form.Label>
                Please describe your suggestion, and please include as much
                infomation as possible.
              </Form.Label>
              <Form.Control as="textarea" rows={5} />
              <Form.Text>
                If submitting a new trail, please include information such as:
                trail name, length, location of terminus/es, whether it's a loop
                or linear, trail association, etc.
              </Form.Text>
            </Form.Group>
            <Button variant="secondary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default Submission;
