import { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LinkIcon from "@mui/icons-material/Link";
import gorkem from "../public/Gorkem.png";
import ashes from "../public/Ashes.png";
import Image from "next/image";
import emailjs from "@emailjs/browser";
export default function Home() {
  const [pageIsLoad, SetpageIsLoad] = useState("menu");
  const [ActivePage, SetActivePage] = useState();
  const [isFormSubmit, SetIsFormSubmit] = useState({
    activeMessage: false,
    Message: "",
  });
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
    if (
      MessageContent.current?.value !== "" &&
      Name.current?.value !== "" &&
      Email.current?.value !== ""
    ) {
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
      SetIsFormSubmit({
        activeMessage: true,
        Message: "Got your mail ????",
      });
      Name.current.value = "";
      Email.current.value = "";
      MessageContent.current.value = "";
    } else if (Name.current?.value === "") {
      SetIsFormSubmit({
        activeMessage: true,
        Message: "Please Enter Your Name or Company Name",
      });
    } else if (Email.current?.value === "") {
      SetIsFormSubmit({
        activeMessage: true,
        Message: "Please Enter Valid E-mail",
      });
    } else if (MessageContent.current?.value === "") {
      SetIsFormSubmit({
        activeMessage: true,
        Message: "Mail Must Be At Least 10 Character",
      });
    }
  };

  const Projects = [
    {
      id: 1,
      Name: "SplendShop",
      Link: "https://graceful-flan-8ed3f8.netlify.app/homepage",
      Details:
        "SplendShop is a basic e-commercial site that is designed and coded by me. I can tell that journey of becoming a React developer started by coding this web app, so the code may not be that clean but SplendShop is working and it improved me realy good to me.",
      CodeDetails:
        "I used ContextAPI, Firebase for authentication, MUI for some components and styles, some libraries for carousel and pagination, I used Local Storage to manage purchase and favorite Items",
    },
    {
      id: 2,
      Name: "To Do List",
      Link: "https://enchanting-tapioca-2145c3.netlify.app",
      Details:
        "This project was first case of a practicum (Patika - PopUpSmart) that user can Add/Delete/Edit to do list items, mark them as complated and list according to different situations ",
      CodeDetails:
        "I used a mockAPI to keep to do list data only, I know that the authentication system was not reliable and accurate because it kept the user data locally, but it was asked to do so in the study.",
    },
    {
      id: 3,
      Name: "Expense List",
      Link: "https://jade-baklava-7a2e68.netlify.app",
      Details:
        "Expense list is a basic project that user can Add new expenses with a title, amount and date. Then user can check his/her expenses listed and also a Bar Graph of them monthly.",
      CodeDetails: "",
    },
    {
      id: 4,
      Name: "Popup Generator",
      Link: "https://636e3ba16d353d089be6df04--storied-cobbler-6dd078.netlify.app",
      Details:
        "This project was final case of a practicum (Patika - PopUpSmart). the logic is providing a enviroment that any user can select a template and customize a popup screen and get the script code of the popup he/she customized",
      CodeDetails: "",
    },
  ];

  const [ProjectDisplayed, SetProjectDisplayed] = useState();

  const ProjectDetailsHandler = (project) => {
    SetProjectDisplayed(project);
  };

  return (
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
      <div>
        <Image
          alt="ashes"
          src={ashes}
          className={styles.ashes}
          onClick={AshesClickHandler}
        />
      </div>
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
            <KeyboardArrowLeftIcon
              className={styles.BackIcon}
              onClick={() => {
                SetActivePage();
                SetpageIsLoad("menu");
              }}
            ></KeyboardArrowLeftIcon>
            <div>About</div>
          </div>
          <div className={styles.AboutContent}>
            I have studied Civil engineering (Bachelor degree) and Web Design &
            coding (associate degree) at college but since January 2022, i have
            been improving myself in the field of front end development (HTML,
            CSS, JavaScript, React JS and more). I have completed 10+ projects
            so far by myself including this portfolio page and all of them
            shared publicly on my gitHub profile. Also my hosted projects can be
            visited at Projects page <br />
            <br />I am currently working freelance but looking for a full time
            job. If you are interested, you can send me an E-mail easily at
            Contact page or you can reach me via Instagram, LinkedIn (links
            below)
          </div>
        </div>
      )}
      {ActivePage === "whyash" && (
        <div className={styles.PageIsLoad}>
          <div className={styles.PageTitle}>
            <KeyboardArrowLeftIcon
              className={styles.BackIcon}
              onClick={() => {
                SetActivePage();
                SetpageIsLoad("menu");
              }}
            ></KeyboardArrowLeftIcon>
            <div>Why website concept is ash?</div>
          </div>
          <div className={styles.AboutContent}>
            Volcanic Ash scattered around as a result of the eruption of
            volcanoes and many minerals come to the surface from the depths of
            the ground. Thus, beneficial minerals and nutrients become available
            to living species. Although it may seem harmful at first, these
            ashes are very valuable for soil and plants. In the long run, these
            ashes provide the creation of perhaps the most productive
            agricultural areas on earth.
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
            <KeyboardArrowLeftIcon
              className={styles.BackIcon}
              onClick={() => {
                SetActivePage();
                SetpageIsLoad("menu");
                SetProjectDisplayed();
              }}
            ></KeyboardArrowLeftIcon>
            <div>Projects</div>
          </div>
          <div className={styles.ProjectList}>
            {Projects.map((project) => {
              return (
                <div key={project.id}>
                  <div
                    className={
                      ProjectDisplayed ? styles.Hidden : styles.ProjectListItem
                    }
                    onClick={() => {
                      ProjectDetailsHandler(project);
                    }}
                  >
                    <div target="_blank">{project.Name}</div>
                  </div>
                </div>
              );
            })}
            <div className={ProjectDisplayed ? styles.test : styles.Hidden}>
              <div className={styles.ProjectTitle}>
                <KeyboardArrowUpIcon
                  className={styles.BackIcon}
                  onClick={() => {
                    SetProjectDisplayed();
                  }}
                ></KeyboardArrowUpIcon>
                <a
                  href={ProjectDisplayed?.Link}
                  target="_blank"
                  className={styles.ProjectLink}
                >
                  <LinkIcon className={styles.link} />
                  {ProjectDisplayed?.Name}
                </a>
                <br />
                <br />
              </div>
              <div className={styles.ProjectDetails}>
                {ProjectDisplayed?.Details} <br />
                <br />
                {ProjectDisplayed?.CodeDetails}
              </div>
            </div>
          </div>
        </div>
      )}
      {ActivePage === "contact" && (
        <div className={styles.PageIsLoad}>
          <div className={styles.PageTitle}>
            <KeyboardArrowLeftIcon
              className={styles.BackIcon}
              onClick={() => {
                SetActivePage();
                SetpageIsLoad("menu");
              }}
            ></KeyboardArrowLeftIcon>
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
            {isFormSubmit.activeMessage === true && (
              <div>{isFormSubmit.Message}</div>
            )}
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
  );
}
