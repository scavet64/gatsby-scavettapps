import React from "react"
import IntroductionComponent from "./introduction/introduction"
import SkillsSection from "./skills/skills"

import s from "./main.module.scss"
import EducationSection from "./education/education"
import ProjectsSection from "./projects/projects"

import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FiMail } from "@react-icons/all-files/fi/FiMail"

const MainContentComponent = () => {
  console.log(s)
  return (
    <div id="main" className={s.mainContainer}>
      <IntroductionComponent />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <section id="contact">
        <h2>Get in Touch</h2>
        <div>
          <div>
            <ul className={s.contactMeList}>
              <li>Have something that you need designed or developed?</li>
              <li>Want a personalized website to showcase who you are?</li>
              <li>
                Need a clean, fast, modern website to convert more visitors into
                customers?
              </li>
            </ul>
            <p className={s.contactMe}>
              Contact me today and see what I can do!
            </p>
          </div>
          <div className={s.socialLinkList}>
            <a href="mailto:scavettapps@gmail.com" className={s.socialLink}>
              <FiMail size="1.5em" />
            </a>

            <a href="https://github.com/scavet64/" className={s.socialLink}>
              <FaGithub size="1.5em" />
            </a>

            <a
              href="https://www.linkedin.com/in/vscavetta/"
              className={s.socialLink}
            >
              <FaLinkedinIn size="1.5em" />
            </a>

            <a href="https://twitter.com/scavettapps" className={s.socialLink}>
              <FaTwitter size="1.5em" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MainContentComponent
