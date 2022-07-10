import Footer from "@components/Footer";
import Header from "@components/Header";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Header />
      <div>Home</div>
      <Button variant="success">Hello World</Button>
      <Footer />
    </>
  );
};

export default Home;
