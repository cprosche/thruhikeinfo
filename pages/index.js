import Head from "next/head";
import TrailList from "../components/TrailList";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

const Home = () => (
  <>
    <Head>
      <title>Thru Hike Info</title>
    </Head>
    <Layout>
      <Hero />
      <TrailList />
    </Layout>
  </>
);

export default Home;