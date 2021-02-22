import React from "react"
import IntroductionComponent from "./introduction/introduction"
import SkillsSection from "./skills/skills"

import s from "./main.module.scss"
import EducationSection from "./education/education"
import ProjectsSection from "./projects/projects"


const MainContentComponent = () => {
  console.log(s)
  return (
    <div id="main" className={s.mainContainer}>
      <IntroductionComponent />
      <SkillsSection />
      <EducationSection/>
      <ProjectsSection/>
    </div>
  )
}

export default MainContentComponent
