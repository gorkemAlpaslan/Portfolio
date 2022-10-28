import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import ashes from "../public/Ashes.png";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
