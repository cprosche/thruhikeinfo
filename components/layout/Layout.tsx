import { Colors } from "../../utils/colors";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div style={{ backgroundColor: Colors.grey, color: Colors.brown }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
