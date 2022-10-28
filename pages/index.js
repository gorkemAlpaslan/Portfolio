import styles from "../styles/Home.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import gorkem from "../public/Gorkem.png";
import ashes from "../public/Ashes.png";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.Title}>PORTFOLIO</div>
        <div className={styles.SideLine}>why website concept is ash?</div>
        <div className={styles.RefsWrapper}>
          <a href="https://www.instagram.com/gorkemddrn/">
            <InstagramIcon className={styles.RefImg} />
          </a>
          <a href="https://www.linkedin.com/in/gorkemderinalpaslan/">
            <LinkedInIcon className={styles.RefImg} />
          </a>
          <a href="https://github.com/gorkemAlpaslan">
            <GitHubIcon className={styles.RefImg} />
          </a>
        </div>
        <div className={styles.testcontainer}>
          <div className={styles.testbubbles}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <Image src={ashes} className={styles.ashes} />
        <Image src={gorkem} className={styles.NameAsImg}></Image>
      </div>
    </div>
  );
}
