import Head from "next/head";
import TrailList from "../components/TrailList";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

// TODO: add styling
const Home = () => (
  <>
    <Head>
      <title>Thru Hike Info</title>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <Hero />
      <TrailList />
    </Layout>
  </>
);

export default Home;
