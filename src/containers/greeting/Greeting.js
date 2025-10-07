import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { illustration, greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  if (!greeting.displayGreeting) return null;

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          {/* LEFT COLUMN (row 1 & 2 content) */}
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {greeting.title} <span className="wave-emoji">{emoji("👋")}</span>
              </h1>

              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>

              <div id="resume" className="empty-div"></div>

              <SocialMedia />

              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={require("./SAADSHAH_RESUME .pdf")}
                    download="Saad_Shah_Resume.pdf"
                    className="download-link-button"
                  >
                    <Button text="Download my resume" />
                  </a>
                )}
              </div>

               {/* ABOUT ME (LEFT COLUMN, ROW 2) */}
               <div className="about-me" id="about">
                 <div className="about-me-content">
                   <h3
                     className={
                       isDark ? "dark-mode about-me-title" : "about-me-title"
                     }
                   >
                     💡 About Me
                   </h3>
                   <p
                     className={
                       isDark ? "dark-mode about-me-text" : "about-me-text"
                     }
                   >
                     Hi, I'm <b>Saad Shah</b>, a software engineer who loves
                     building things that make an impact. I'm passionate about
                     crafting scalable APIs, intuitive web apps, and AI-driven
                     tools that solve real problems. My go-to stack includes{" "}
                     <b>Python (FastAPI, Flask)</b>, <b>Java (Spring Boot)</b>,
                     and <b>JavaScript/TypeScript (React, Next.js)</b>, and I
                     enjoy the full process from architecture to deployment.
                   </p>
                   <p
                     className={
                       isDark ? "dark-mode about-me-text" : "about-me-text"
                     }
                   >
                     Beyond code, I'm someone who finds creativity in logic. I
                     love playing <b>chess</b> in my free time because it keeps my
                     mind sharp and teaches me patience in problem-solving. I'm
                     also a huge <b>sports</b> enthusiast, and I've been a loyal{" "}
                     <b>FC Barcelona</b> supporter since childhood. Watching them
                     play has been my favorite break from code for as long as I
                     can remember.
                   </p>
                   <p
                     className={
                       isDark ? "dark-mode about-me-text" : "about-me-text"
                     }
                   >
                     Whether I'm experimenting with new AI projects, optimizing a
                     backend service, or watching a late-night Champions League
                     match, I'm always driven by curiosity and the love of
                     learning.
                   </p>
                   
                   {/* Tech Stack Visual */}
                   <div className="tech-stack-visual">
                     <h4 className={isDark ? "dark-mode tech-stack-title" : "tech-stack-title"}>
                       🛠️ Tech Stack
                     </h4>
                     <div className="tech-stack-grid">
                       <div className="tech-category">
                         <span className="tech-category-label">Languages</span>
                         <div className="tech-tags">
                           <span className="tech-tag">Python</span>
                           <span className="tech-tag">Java</span>
                           <span className="tech-tag">JavaScript</span>
                           <span className="tech-tag">TypeScript</span>
                           <span className="tech-tag">SQL</span>
                         </div>
                       </div>
                       <div className="tech-category">
                         <span className="tech-category-label">Frameworks</span>
                         <div className="tech-tags">
                           <span className="tech-tag">React</span>
                           <span className="tech-tag">Next.js</span>
                           <span className="tech-tag">FastAPI</span>
                           <span className="tech-tag">Spring Boot</span>
                           <span className="tech-tag">Flask</span>
                         </div>
                       </div>
                       <div className="tech-category">
                         <span className="tech-category-label">Cloud & Tools</span>
                         <div className="tech-tags">
                           <span className="tech-tag">AWS</span>
                           <span className="tech-tag">GCP</span>
                           <span className="tech-tag">Docker</span>
                           <span className="tech-tag">Git</span>
                           <span className="tech-tag">CI/CD</span>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
          </div>

          {/* RIGHT COLUMN (row 1) – illustration */}
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              />
            )}
          </div>

          {/* RIGHT COLUMN (row 2) – photo in the white space */}
          <div className="about-me-photo">
            <img
              alt="Saad Shah"
              src={require("../../assets/images/profile.jpg")}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
