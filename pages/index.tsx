import Hero from "../components/layout/Hero";
import Layout from "../components/layout/Layout";
import TrailList from "../components/trail/TrailList";
import Head from "../node_modules/next/head";

// TODO: add next.js static props and other static site gen components
const Home = () => (
  <>
    <Head>
      <title>Home | Thru Hike Info | Info for planning your next big thru hike</title>
      <meta
        name="description"
        content="Infomation to help you plan your next big thru hike. If you can't find the info you are looking for here, let us know and we will add it!"
      ></meta>
    </Head>
    <Layout>
      <Hero />
      <TrailList />
    </Layout>
  </>
);

export default Home;
