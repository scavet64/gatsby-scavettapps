import React from "react"

import s from "./skills.module.scss"

import svc1 from "../../../images/icons/webdesign.svg"
import svc2 from "../../../images/icons/server.svg"
import svc3 from "../../../images/icons/devops.svg"

const SkillsSection = () => {
  return (
    <section id="skills">
      <h2>What I know</h2>
      <div className={s.skillsList}>
        <div className={s.skillsListItem}>
          <div className={s.skillsListItemTitle}>
            <img
              src={svc1}
              height="125px"
              width="125px"
              alt="Frontend Development"
            />
            <h4>Frontend Development</h4>
          </div>
          <div className={s.skillsListItemBody}>
            <p>
              Many users make their decision if they will continue using a
              website or application in the first few seconds of their visit.
              Having a fast, clean, easy to navigate website is critical to
              ensure new users are welcomed and not overwhelmed or confused.
              Taking the time to create a great user interface is something that
              I always like to spend time doing.
            </p>
            <div className={s.tagContainer}>
              <div className={s.tag}>Angular</div>
              <div className={s.tag}>Material</div>
              <div className={s.tag}>React</div>
              <div className={s.tag}>GatsbyJS</div>
              <div className={s.tag}>Adobe Suite</div>
            </div>
          </div>
        </div>

        <div className={s.skillsListItem}>
          <div className={s.skillsListItemTitle}>
            <img
              src={svc2}
              height="125px"
              width="125px"
              alt="Backend Development"
            />
            <h4>Backend Development</h4>
          </div>
          <div className={s.skillsListItemBody}>
            <p>
              API Servers are the backbone of just about any application. It is
              critical to ensure high availability as well as modularity to keep
              up with the competition and deliver updates quickly. With the
              recent industry movement away from the traditional monolithic
              design into a microservice oriented architecture, I have gained
              experience working with technologies such as Spring, Docker, and
              Kubernetes to stand up microservices with ease
            </p>
            <div className={s.tagContainer}>
              <div className={s.tag}>Java</div>
              <div className={s.tag}>Spring Boot</div>
              <div className={s.tag}>ASP.NET</div>
              <div className={s.tag}>MySQL</div>
              <div className={s.tag}>Node.js</div>
              <div className={s.tag}>Python</div>
            </div>
          </div>
        </div>

        <div className={s.skillsListItem}>
          <div className={s.skillsListItemTitle}>
            <img
              src={svc3}
              height="125px"
              width="125px"
              alt="DevOps Experience"
            />
            <h4>DevOps Experience</h4>
          </div>
          <div className={s.skillsListItemBody}>
            <p>
              Development is only half the battle. Knowing how to deploy your
              code to a staging platform and push into production in a
              continuous pipeline to facilitate a rapid delivery can be the
              difference in the success of an application. As part of my
              professional and personal development projects, I have been
              learning new methodologies and technologies to keep up with the
              ever growing space
            </p>
            <div className={s.tagContainer}>
              <div className={s.tag}>Docker</div>
              <div className={s.tag}>AWS</div>
              <div className={s.tag}>Heroku</div>
              <div className={s.tag}>CI/CD</div>
              <div className={s.tag}>Kubernetes</div>
              <div className={s.tag}>Elastic Stack</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
