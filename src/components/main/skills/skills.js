import React from "react"

import {
  skillsList,
  skillsListItem,
  skillsListItemTitle,
  skillsListItemBody,
  tagContainer,
  tag,
} from "./skills.module.scss"

import svc1 from "../../../images/icons/webdesign.svg"
import svc2 from "../../../images/icons/server.svg"
import svc3 from "../../../images/icons/devops.svg"

const SkillsSection = () => {
  return (
    <section id="skills">
      <h2>What I know</h2>
      <div className={skillsList}>
        <div className={skillsListItem}>
          <div className={skillsListItemTitle}>
            <img
              src={svc1}
              height="125px"
              width="125px"
              alt="Frontend Development"
            />
            <h4>Frontend Development</h4>
          </div>
          <div className={skillsListItemBody}>
            <p>
              In those critical first moments on a website or app, users decide
              its friendliness. Prioritizing speed, cleanliness, and easy
              navigation is key. As a developer with expertise in frontend
              frameworks and best practices, I invest in creating a smooth and
              intuitive user interface, leveraging tools such as React, Gatsby,
              and Figma, to enhance overall user experience, satisfaction, and
              conversions.
            </p>
            <div className={tagContainer}>
              <div className={tag}>Angular</div>
              <div className={tag}>React</div>
              <div className={tag}>Typescript</div>
              <div className={tag}>GatsbyJS</div>
              <div className={tag}>UI/UX Design</div>
              <div className={tag}>Figma</div>
              <div className={tag}>Adobe Suite</div>
            </div>
          </div>
        </div>

        <div className={skillsListItem}>
          <div className={skillsListItemTitle}>
            <img
              src={svc2}
              height="125px"
              width="125px"
              alt="Backend Development"
            />
            <h4>Backend Development</h4>
          </div>
          <div className={skillsListItemBody}>
            <p>
              API servers are fundamental to application development, serving as
              the communication interface between components. High availability
              and modularity are critical for smooth application functioning,
              and enable fast updates. The industry trend toward
              microservice-based architecture demands agility and scalability.
              My experience with cutting-edge technologies such as Spring,
              ASP.Net 8, Docker, and Kubernetes has enabled me to deploy and
              manage microservices to AWS ease, creating a flexible
              infrastructure that integrates new features and enhances fault
              tolerance and performance. Adopting a microservice-based approach
              allows developers to build resilient, scalable, and responsive
              applications.
            </p>
            <div className={tagContainer}>
              <div className={tag}>C#</div>
              <div className={tag}>Dotnet 8</div>
              <div className={tag}>Entity Framework 8</div>
              <div className={tag}>Java 21</div>
              <div className={tag}>Spring Boot</div>
              <div className={tag}>ASP.NET</div>
              <div className={tag}>MSSQL</div>
              <div className={tag}>Node.js</div>
            </div>
          </div>
        </div>

        <div className={skillsListItem}>
          <div className={skillsListItemTitle}>
            <img
              src={svc3}
              height="125px"
              width="125px"
              alt="DevOps Experience"
            />
            <h4>DevOps Experience</h4>
          </div>
          <div className={skillsListItemBody}>
            <p>
              High-quality code is just the first step in software development.
              Rapid delivery of an application requires deploying code to
              staging and production via a continuous pipeline. Proficiency in
              these technologies can be the difference in an application's
              success. I utilize a wide range of AWS services, such as Lambda,
              ECS, API Gateway, RDS, IAM, Cognito, Cloudwatch, Cloudformation,
              and S3, to build secure, scalable, and highly available
              cloud-based solutions. I stay current with emerging technologies,
              optimize existing deployment strategies, and adopt new ones to
              deliver top-quality results. In today's changing technology
              landscape, I offer the experience and expertise to help you
              achieve success at every stage of your application's development.
            </p>
            <div className={tagContainer}>
              <div className={tag}>Docker</div>
              <div className={tag}>AWS</div>
              <div className={tag}>CloudFormation</div>
              <div className={tag}>ECS</div>
              <div className={tag}>Serverless</div>
              <div className={tag}>CI/CD</div>
              <div className={tag}>Kubernetes</div>
              <div className={tag}>Elastic Stack</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
