import Hero from "../components/layout/Hero";
import Layout from "../components/layout/Layout";
import TrailList from "../components/trail/TrailList";
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
