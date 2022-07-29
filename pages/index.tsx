import TrailList from "../components/TrailList";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Head from "../node_modules/next/head";

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
