import React from "react"
import SkillsSection from "./skills/skills"

import s from "./main.module.scss"
import EducationSection from "./education/education"
import ProjectsSection from "./projects/projects"

import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FiMail } from "@react-icons/all-files/fi/FiMail"

const MainContentComponent = () => {
  return (
    <div id="main" className={s.mainContainer}>

      <section id="about">
        <h2>Who I am</h2>
        <p>
          My name is Vincent Scavetta and I am a professional Full Stack
          Software Engineer specializing in developing secure software for the
          Department of Defense. On any given day you can usually find me
          programming away on all sorts of different projects, some small and
          some complex, whatever fits the mood. When im not programming, I like
          to spend time learning new topics and enhancing my current skill so I
          can take my projects to the next level.
        </p>
      </section>

      <SkillsSection />
      <EducationSection />
      <ProjectsSection />

      <section id="contact">
        <h2>Get in Touch</h2>
        <div>
          <div>
            <p className={s.contactMe}>
              Need a clean, fast, modern website to convert more visitors into
              customers? Contact me today and see what I can do!
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
