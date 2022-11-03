import { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import gorkem from "../public/Gorkem.png";
import ashes from "../public/Ashes.png";
import Image from "next/image";
import emailjs from "@emailjs/browser";
export default function Home() {
  const [pageIsLoad, SetpageIsLoad] = useState("menu");
  const [ActivePage, SetActivePage] = useState();
  const [isFormSubmit, SetIsFormSubmit] = useState({
    isSubmit: false,
    Message: "",
  });
  const [errorMessage, SetErrorMessage] = useState("");
  const ProjectsRef = useRef();
  const AboutRef = useRef();
  const ContactRef = useRef();

  const form = useRef();
  const Email = useRef();
  const Name = useRef();
  const MessageContent = useRef();

  useEffect(() => {
    if (pageIsLoad === "menu") {
      ProjectsRef.current.className = styles.Projectstitle;
      AboutRef.current.className = styles.Abouttitle;
      ContactRef.current.className = styles.Contacttitle;
    }
    if (pageIsLoad === undefined) {
      ProjectsRef.current.className = styles.ProjectstitleHidden;
      AboutRef.current.className = styles.AbouttitleHidden;
      ContactRef.current.className = styles.ContacttitleHidden;
    }
  }, [pageIsLoad]);

  const AshesClickHandler = () => {
    if (pageIsLoad === undefined) {
      SetpageIsLoad("menu");
    } else {
      SetpageIsLoad(undefined);
    }
  };

  const sendEmailHandler = (e) => {
    e.preventDefault();

    Email.current.value <= 0 && SetErrorMessage("Please Enter Valid E-mail");
    Name.current.value <= 0 && SetErrorMessage("Please Enter Your Name");
    MessageContent.current.value <= 0 &&
      SetErrorMessage("Mail Must Be At Least 10 Character");

    if (errorMessage === "") {
      SetIsFormSubmit({
        isSubmit: true,
        Message: "Got your mail 😊",
      });
      emailjs
        .sendForm(
          "service_gktrxa2",
          "template_x9bpnrx",
          form.current,
          "Fj3Nx-NZLXGUPhan3"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setTimeout(() => {
        SetIsFormSubmit({
          isSubmit: false,
          Message: "",
        });
      }, 3000);
    } else if (errorMessage === "Please Enter Valid E-mail") {
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.MainTitle}>PORTFOLIO</div>
        <div
          className={styles.SideLine}
          onClick={() => {
            SetActivePage("whyash");
            SetpageIsLoad(undefined);
          }}
        >
          why website concept is ash?
        </div>
        <div className={styles.RefsWrapper}>
          <a href="https://www.instagram.com/gorkemddrn/" target="_blank">
            <InstagramIcon className={styles.RefImg} />
          </a>
          <a
            href="https://www.linkedin.com/in/gorkemderinalpaslan/"
            target="_blank"
          >
            <LinkedInIcon className={styles.RefImg} />
          </a>
          <a href="https://github.com/gorkemAlpaslan" target="_blank">
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
        <Image
          alt="ashes"
          src={ashes}
          className={styles.ashes}
          onClick={AshesClickHandler}
        />
        <Image alt="Name" src={gorkem} className={styles.NameAsImg}></Image>
        <div className={styles.titles}>
          <div>
            <h2
              className={styles.ProjectstitleHidden}
              ref={ProjectsRef}
              onClick={() => {
                SetActivePage("project");
                SetpageIsLoad(undefined);
              }}
            >
              Projects
            </h2>
            <h2
              className={styles.ContacttitleHidden}
              ref={ContactRef}
              onClick={() => {
                SetActivePage("contact");
                SetpageIsLoad(undefined);
              }}
            >
              Contact
            </h2>
            <h2
              className={styles.AbouttitleHidden}
              ref={AboutRef}
              onClick={() => {
                SetActivePage("about");
                SetpageIsLoad(undefined);
              }}
            >
              About
            </h2>
          </div>
        </div>
        {ActivePage === "about" && (
          <div className={styles.PageIsLoad}>
            <div className={styles.PageTitle}>
              <ArrowBackIosIcon
                className={styles.BackIcon}
                onClick={() => {
                  SetActivePage();
                  SetpageIsLoad("menu");
                }}
              ></ArrowBackIosIcon>
              <div>About</div>
            </div>
            <div className={styles.AboutContent}>
              lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
            </div>
          </div>
        )}
        {ActivePage === "whyash" && (
          <div className={styles.PageIsLoad}>
            <div className={styles.PageTitle}>
              <ArrowBackIosIcon
                className={styles.BackIcon}
                onClick={() => {
                  SetActivePage();
                  SetpageIsLoad("menu");
                }}
              ></ArrowBackIosIcon>
              <div>Why website concept is ash?</div>
            </div>
            <div className={styles.AboutContent}>
              Volcanic Ash scattered around as a result of the eruption of
              volcanoes and many minerals come to the surface from the depths of
              the ground. Thus, beneficial minerals and nutrients become
              available to living species. Although it may seem harmful at
              first, these ashes are very valuable for soil and plants. In the
              long run, these ashes provide the creation of perhaps the most
              productive agricultural areas on earth.
            </div>
            <div className={styles.AboutContent}>
              The Concept here aims to convey my personal point of view in
              addition to the projects that have actually been done.
            </div>
          </div>
        )}
        {ActivePage === "project" && (
          <div className={styles.PageIsLoad}>
            <div className={styles.PageTitle}>
              <ArrowBackIosIcon
                className={styles.BackIcon}
                onClick={() => {
                  SetActivePage();
                  SetpageIsLoad("menu");
                }}
              ></ArrowBackIosIcon>
              <div>Projects</div>
            </div>
            <ul className={styles.ProjectList}>
              <li>
                <a
                  href="https://github.com/gorkemAlpaslan/SplendShop"
                  target="_blank"
                >
                  Splend Shop
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/gorkemAlpaslan/SplendShop"
                  target="_blank"
                >
                  Splend Shop
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/gorkemAlpaslan/SplendShop"
                  target="_blank"
                >
                  Splend Shop
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/gorkemAlpaslan/SplendShop"
                  target="_blank"
                >
                  Splend Shop
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/gorkemAlpaslan/SplendShop"
                  target="_blank"
                >
                  Splend Shop
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/gorkemAlpaslan/SplendShop"
                  target="_blank"
                >
                  Splend Shop
                </a>
              </li>
            </ul>
          </div>
        )}
        {ActivePage === "contact" && (
          <div className={styles.PageIsLoad}>
            <div className={styles.PageTitle}>
              <ArrowBackIosIcon
                className={styles.BackIcon}
                onClick={() => {
                  SetActivePage();
                  SetpageIsLoad("menu");
                }}
              ></ArrowBackIosIcon>
              <div>Contact</div>
            </div>
            <form
              className={styles.ContactContent}
              ref={form}
              onSubmit={sendEmailHandler}
            >
              <div className={styles.UnderContactTitle}>
                You can reach me easily
              </div>
              {isFormSubmit === true && <div></div>}
              <div>
                <div className={styles.PersonalInfoInput}>
                  <input
                    placeholder="Name"
                    type="text"
                    name="user_name"
                    ref={Name}
                  ></input>
                  <input
                    placeholder="E-mail"
                    type="email"
                    name="user_email"
                    ref={Email}
                  ></input>
                </div>
                <textarea
                  name="message"
                  placeholder="Enter your Message..."
                  className={styles.MessageInput}
                  ref={MessageContent}
                ></textarea>
              </div>
              <button type="submit" value="Send">
                Send
              </button>
              <div className={styles.ContactAlso}>
                Also you can check my accounts below :)
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
