import React from "react"

import s from "./skills.module.scss"

import svc1 from "../../../images/icons/webdesign.svg"
import svc2 from "../../../images/icons/server.svg"
import svc3 from "../../../images/icons/devops.svg"
import svc4 from "../../../images/icons/graduate.svg"

const SkillsSection = () => {
  return (
    <section id="skills">
      <h2>What I know</h2>
      <div className={s.skillsList}>
        <div className={s.skillsListItem}>
          <div className={s.skillsListItemTitle}>
            <img src={svc1} height="125px" width="125px"></img>
            <p>Frontend Development</p>
          </div>
          <div className={s.skillsListItemBody}>
            <p>
              The user interface is arguably one of the most important aspects
              of how successful an application or website can be. Many users
              make their decision if they will continue using a website or
              application in the first few seconds of their visit. Having a
              clean, easy to understand and navigate website is critical to
              ensure new users are welcomed and not totally overwhelmed or
              confused. Taking the time to create a great user interface is
              something that I always like to spend time doing.
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
            <img src={svc2} height="125px" width="125px"></img>
            <p>Backend Development</p>
          </div>
          <div className={s.skillsListItemBody}>
            <p>
              API Servers are the backbone of just about any application. It is
              absolutely critical to ensure high availability as well as
              modularity to keep up with the the growing demand. With the recent
              industry movement away from the traditional monolith design into a
              more microservice oriented architecture, I have gained experience
              working with technologies such as Spring and Docker to stand up
              microservices with ease
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
            <img src={svc3} height="125px" width="125px"></img>
            <p>Dev-ops Experience</p>
          </div>
          <div className={s.skillsListItemBody}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              possimus nam architecto, voluptatem quidem blanditiis accusamus
              reiciendis enim corporis facilis cumque ut ducimus optio quia
              voluptatibus a culpa excepturi error.
            </p>
            <div className={s.tagContainer}>
              <div className={s.tag}>Docker</div>
              <div className={s.tag}>Kubernetes</div>
              <div className={s.tag}>AWS</div>
              <div className={s.tag}>Heroku</div>
              <div className={s.tag}>CI/CD</div>
              <div className={s.tag}>Elastic Stack</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
