import Head from "next/head";
import Footer from "@components/Footer";
import Header from "@components/Header";
import TrailList from "@components/TrailList";

const Home = () => {
  return (
    <>
      <Head></Head>
      <Header />
      <TrailList />
      <Footer />
    </>
  );
};

export default Home;
