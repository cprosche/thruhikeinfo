import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TrailList from "../components/TrailList";
import Hero from "../components/Hero";

// TODO: add styling
const Home = () => (
  <>
    <Head>
      <title>Thru Hike Info</title>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    {/* TODO: create layout component */}
    <Header />
    <Hero />
    <TrailList />
    <Footer />
  </>
);

export default Home;
