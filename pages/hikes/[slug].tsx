import Layout from "../../components/layout/Layout";
import { trails } from "../../data/trails";
import Col from "../../node_modules/react-bootstrap/esm/Col";
import Container from "../../node_modules/react-bootstrap/esm/Container";
import Row from "../../node_modules/react-bootstrap/esm/Row";
import { ITrail } from "../../data/trails";
import Link from "../../node_modules/next/link";
import Button from "../../node_modules/react-bootstrap/esm/Button";
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome/index";
import { faArrowLeft } from "../../node_modules/@fortawesome/free-solid-svg-icons/index";
import { countryCodes } from "../../data/countryCodes";
import { months } from "../../data/months";
import Head from "../../node_modules/next/head";
import TrailInfoTable from "../../components/trail/TrailInfoTable";

export const getStaticPaths = () => {
  const paths = trails.map((trail) => {
    return {
      params: { slug: trail.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  const slug = context.params.slug;
  const trail = trails.filter((trail) => trail.slug === slug)[0];
  return {
    props: { trail },
  };
};

interface IProps {
  trail: ITrail;
}

const arrayToList = (array) => {
  return array.join(", the ").replace(/, ((?:.(?!, ))+)$/, ", and $1");
};

// TODO: add trail subsections as seperate trails on individual pages
// TODO: add links to multiple maps on individual pages
// TODO: add weather to terminuses
const TrailPage = ({
  trail: {
    slug,
    name,
    length,
    aliases,
    terminusA,
    terminusB,
    trailAssociation,
    type,
    continent,
  },
}: IProps) => {
  const defaultMileage = 15;
  return (
    <>
      <Head>
        <title>{name}</title>
        <meta
          name="description"
          content={`The ${name} is a ${length} mile long trail in ${continent}.`}
        ></meta>
      </Head>
      <Layout>
        <Container>
          <Row>
            <Col
              lg={{ span: 8, offset: 2 }}
              style={{ minHeight: "78vh" }}
              className="mb-5"
            >
              <div className="mt-4 mb-3">
                <Link href={`/hikes#${slug}`}>
                  <Button>
                    <FontAwesomeIcon icon={faArrowLeft} /> Back to all hikes
                  </Button>
                </Link>
              </div>
              <h1>{name}</h1>
              <p>
                The {name} in {continent} is estimated to be {length} miles (
                {Math.ceil(length * 1.61)} kilometers) long, and takes{" "}
                {Math.ceil(length / defaultMileage)} days* to complete when
                hiking at an average of {defaultMileage} miles (
                {Math.ceil(defaultMileage * 1.61)} kilometers) per day.
              </p>
              {aliases?.length > 0 && (
                <p>
                  This trail is also referred to as the {arrayToList(aliases)}.
                </p>
              )}
              {type === "Linear" ? (
                <>
                  <p>
                    It is a linear trail, which means that to do a thru hike,
                    you will have to start and end your hike in different
                    places.
                  </p>
                  <p>
                    The {name} has 2 terminuses. Most thruhikers choose to start
                    their hike at the{" "}
                    <a
                      href={`https://maps.google.com/?q=${terminusA.location.latitude},${terminusA.location.longitude}`}
                      target="_blank"
                    >
                      {terminusA.name}
                    </a>{" "}
                    in {terminusA.city}, {terminusA.region},{" "}
                    {countryCodes[terminusA.country]} and end their hike at the{" "}
                    <a
                      href={`https://maps.google.com/?q=${terminusB.location.latitude},${terminusB.location.longitude}`}
                      target="_blank"
                    >
                      {terminusB.name}
                    </a>{" "}
                    in {terminusB.city}, {terminusB.region},{" "}
                    {countryCodes[terminusB.country]}.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    It is a loop trail, which means that to do a complete thru
                    hike of the trail, you will start and end your hike at the
                    same place.
                  </p>
                  <p>
                    Because the {name} is a loop trail, a thruhiker can start
                    their hike at any point along the trail and complete a
                    successful thruhike. One recommended starting point is{" "}
                    <a
                      href={`https://maps.google.com/?q=${terminusA.location.latitude},${terminusA.location.longitude}`}
                      target="_blank"
                    >
                      {terminusA.name}
                    </a>{" "}
                    in {terminusA.city}, {terminusA.region},{" "}
                    {countryCodes[terminusA.country]}.
                  </p>
                </>
              )}
              {terminusA.startDate && (
                <p>
                  A good day of the year to start this hike from the{" "}
                  <a
                    href={`https://maps.google.com/?q=${terminusA.location.latitude},${terminusA.location.longitude}`}
                    target="_blank"
                  >
                    {terminusA.name}
                  </a>{" "}
                  is {months[terminusA.startDate.month - 1]}{" "}
                  {terminusA.startDate.day}.
                </p>
              )}
              {trailAssociation && (
                <p>
                  The <a href={trailAssociation.url}>{trailAssociation.name}</a>{" "}
                  takes on the task of maintaining, improving, and advocating
                  for the {name} as its trail association.
                </p>
              )}
              <h3>Information</h3>
              <TrailInfoTable
                trail={{
                  name,
                  length,
                  aliases,
                  terminusA,
                  terminusB,
                  trailAssociation,
                  type,
                  continent,
                }}
              />
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default TrailPage;
