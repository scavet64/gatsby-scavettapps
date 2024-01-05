import React from "react"

import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaExternalLinkAlt } from "@react-icons/all-files/fa/FaExternalLinkAlt"

import {
  projectContainer,
  projectDescription,
  projectList,
  projectListItem,
  buttonContainer,
  buttonAnchor,
} from "./projects.module.scss"

import supernova from "../../../images/icons/supernovaMaybe.svg"
import animalCrossing from "../../../images/icons/animal-crossing.svg"
import incrediball from "../../../images/icons/beach-ball.svg"

import noisebean from "../../../images/icons/noisebean.png"
import checkers from "../../../images/icons/checkers.png"
import win32Helper from "../../../images/icons/win32-library.png"

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
            <img
              src={animalCrossing}
              height="150px"
              width="150px"
              alt="Animal Crossing Critters Logo"
            />
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
            <img
              src={supernova}
              height="150px"
              width="150px"
              alt="Super Nova Escape Logo"
            />
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
            <img
              src={incrediball}
              height="150px"
              width="150px"
              alt="Incrediball Logo"
            />
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

          <div className={projectListItem}>
            <img
              src={noisebean}
              height="150px"
              width="150px"
              alt="Noisebean Logo"
            />
            <h4>NoiseBean</h4>
            <p>
              Personal Discord bot powered by JDA, Spring Boot, and Spring Data
              JPA. Its can play music from YouTube or act as a soundboard with
              uploaded files. It also can run private polls, and keep track game
              play times to collect statistics that players can later view.
            </p>
            <div className={buttonContainer}>
              <a
                className={buttonAnchor}
                href="https://github.com/scavet64/NoiseBean"
              >
                <FaGithub />
                &nbsp;Source
              </a>
            </div>
          </div>

          <div className={projectListItem}>
            <img
              src={checkers}
              height="150px"
              width="150px"
              alt="Checkers Minimax Logo"
            />
            <h4>Checkers Minimax</h4>
            <p>
              A full implementation in the Dotnet framework of a playable
              checkers game against a computer opponent. The artificial
              intelligence uses the Minimax algorithm to strategize and
              determine optimal moves based on genetically determined heuristics
            </p>
            <div className={buttonContainer}>
              <a
                className={buttonAnchor}
                href="https://github.com/scavet64/CheckersMinimax"
              >
                <FaGithub />
                &nbsp;Source
              </a>
            </div>
          </div>

          <div className={projectListItem}>
            <img
              src={win32Helper}
              height="150px"
              width="150px"
              alt="Win32ApiHelper icon"
            />

            <h4>Win32ApiHelper</h4>
            <p>
              This library was created to assist me in some of my other projects
              where I required the use of windows specific API functions. The
              main function of this library is the concept of impersonation and
              launching processes from a windows service.
            </p>
            <div className={buttonContainer}>
              <a
                className={buttonAnchor}
                href="https://github.com/scavet64/Win32ApiHelper"
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
