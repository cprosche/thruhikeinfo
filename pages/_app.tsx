import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import "../styles/globals.css";
import { analytics } from "../utils/analytics";

// TODO: build a hiking budget calculator
// TODO: add next.js static props and other static site gen components
// TODO: add page for planned features
// TODO: add sitemap
function Application({ Component, pageProps }) {
  useEffect(() => {
    analytics(window, document, "script", "dataLayer", "GTM-MGJM6LK");
  });
  return <Component {...pageProps} />;
}

export default Application;
