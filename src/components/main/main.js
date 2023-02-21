import React from "react"
import SkillsSection from "./skills/skills"

import {
  mainContainer,
  contactMeText,
  contactMe,
  socialLinkList,
  socialContainer,
  socialLink,
} from "./main.module.scss"
import EducationSection from "./education/education"
import ProjectsSection from "./projects/projects"

import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FiMail } from "@react-icons/all-files/fi/FiMail"

const MainContentComponent = () => {
  return (
    <div id="main" className={mainContainer}>
      <section id="about">
        <h2>Who I am</h2>
        <p>
          As a seasoned Full-Stack Software Engineer with expertise in
          developing secure cloud and client based applications, I have honed my
          skills on a variety of projects, both small and complex. Driven by a
          passion for innovation, I continually strive to stay ahead of the
          curve by keeping up with the latest programming languages and
          technologies. Whether it's discovering new techniques to improve code
          efficiency or implementing cutting-edge features, I am dedicated to
          taking my projects and dream ideas to the next level. When not
          immersed in programming, I enjoy playing video games and following my
          favorite content creators on Twitch and YouTube, keeping up with the
          latest trends and developments in the industry.
        </p>
      </section>

      <SkillsSection />
      <EducationSection />
      <ProjectsSection />

      <section id="contact">
        <h2>Get in Touch</h2>
        <div>
          <div className={contactMeText}>
            <p className={contactMe}>
              Want to improve your online presence and drive more sales? I can
              help! I create fast, modern, and visually appealing websites that
              convert visitors into customers. Whether you're starting a new
              business or refreshing your existing one, I have the skills and
              creativity to take your website to the next level. Contact me
              today to discuss your digital goals!
            </p>
          </div>
          <div className={socialLinkList}>
            <div className={socialContainer}>
              <a href="mailto:scavettapps@gmail.com" className={socialLink}>
                <FiMail size="1.5em" />
              </a>
              contact@scavettapps.com
            </div>

            <div className={socialContainer}>
              <a href="https://github.com/scavet64/" className={socialLink}>
                <FaGithub size="1.5em" />
              </a>
              github.com/scavet64
            </div>

            <div className={socialContainer}>
              <a
                href="https://www.linkedin.com/in/vscavetta/"
                className={socialLink}
              >
                <FaLinkedinIn size="1.5em" />
              </a>
              linkedin.com/in/vscavetta
            </div>

            <div className={socialContainer}>
              <a href="https://twitter.com/scavettapps" className={socialLink}>
                <FaTwitter size="1.5em" />
              </a>
              twitter.com/scavettapps
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MainContentComponent
