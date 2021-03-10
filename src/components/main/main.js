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
          My name is Vincent Scavetta and I am a professional Full-Stack
          Software Engineer specializing in developing secure software for the
          Department of Defense. On any given day you can usually find me
          programming away on all sorts of different projects. Some small and
          some complex, whatever fits the mood. I love to spend time learning
          about new programming languages and technologies so I can take my
          projects and dream ideas to the next level. While I'm not programming,
          I like to spend time playing new and old video games or watching my
          favorite content creators on Twitch and YouTube.
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
              Need a clean, fast, modern website to convert more visitors into
              customers? Contact me today and see what I can do!
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
