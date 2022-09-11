import { Colors } from "../../utils/colors";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div
      className="d-flex flex-column"
      style={{
        minHeight: "100vh",
        backgroundColor: Colors.grey,
        color: Colors.brown,
      }}
    >
      <Header />
      <div style={{ flex: 1 }}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
