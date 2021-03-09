import React from "react"

import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaExternalLinkAlt } from "@react-icons/all-files/fa/FaExternalLinkAlt"

import { projectContainer, projectDescription, projectList, projectListItem, buttonContainer, buttonAnchor } from "./projects.module.scss"

import supernova from "../../../images/icons/supernovaMaybe.svg"
import animalCrossing from "../../../images/icons/animal-crossing.svg"
import incrediball from "../../../images/icons/beach-ball.svg"

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h2>What I've Made</h2>

      <div className={projectContainer}>
        <div className={projectDescription}>
          <p>
            These are just a few of the projects that I have worked on that have
            been published around on the internet. The source code for these
            projects among others can be found on my&nbsp;
            <a href="https://github.com/scavet64">GitHub profile</a>
          </p>
        </div>

        <div className={projectList}>
          <div className={projectListItem}>
            <img src={animalCrossing} height="150px" width="150px" alt="Animal Crossing Critters Logo"/>
            <h4>Animal Crossing Critters</h4>
            <p>
              Help keep track and fill out your Animal Crossing New Horizons
              Critterpedia by using this tracker to see which critters you have
              captured and see when each critter is available.
            </p>
            <div className={buttonContainer}>
              <a
                className={buttonAnchor}
                href="https://animalcrossing.scavettapps.com"
              >
                <FaExternalLinkAlt />
                &nbsp;Visit
              </a>
              <a
                className={buttonAnchor}
                href="https://github.com/scavet64/AnimalCrossingCritters"
              >
                <FaGithub />
                &nbsp;Source
              </a>
            </div>
          </div>
          <div className={projectListItem}>
            <img src={supernova} height="150px" width="150px" alt="Super Nova Escape Logo"/>
            <h4>SuperNova: Escape!</h4>
            <p>
              Tap to escape the trailing super nova in this endless arcade
              classic! Carefully avoid the asteroids floating in space without
              slowing down... Tap too slowly and the super nova will surly catch
              up!
            </p>
            <div className={buttonContainer}>
              <a
                className={buttonAnchor}
                href="https://apps.apple.com/us/app/supernova-escape/id1212043972"
              >
                <FaExternalLinkAlt />
                &nbsp;Download
              </a>

              <a
                className={buttonAnchor}
                href="https://github.com/scavet64/SuperNova-Escape"
              >
                <FaGithub />
                &nbsp;Source
              </a>
            </div>
          </div>
          <div className={projectListItem}>
            <img src={incrediball} height="150px" width="150px" alt="Incrediball Logo"/>
            <h4>Incrediball</h4>
            <p>
              Incrediball is the most incredible endless rolling ball
              experience. Steer the ball left and right on randomly generated
              paths to show your friends that you are truly incrediball.
            </p>
            <div className={buttonContainer}>
              <a
                className={buttonAnchor}
                href="https://apps.apple.com/us/app/incrediball-the-endlessly-rolling-ball/id1119680630"
              >
                <FaExternalLinkAlt />
                &nbsp;Download
              </a>
              <a
                className={buttonAnchor}
                href="https://github.com/scavet64/Incrediball"
              >
                <FaGithub />
                &nbsp;Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
