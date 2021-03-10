import React from "react"

import {
  educationContainer,
  educationDescription,
  degreeList,
  degreeListItem,
} from "./education.module.scss"

const EducationSection = () => {
  return (
    <section id="education">
      <h2>Where I've Learned</h2>

      <div className={educationContainer}>
        <div className={educationDescription}>
          <p>
            I attended Rowan University to first obtain my bachelor of science
            in biology with a minor in computer science and chemistry. After
            falling in love with computer science, I continued my education in
            computer science by also completing my graduate degree at Rowan
          </p>
        </div>

        <div className={degreeList}>
          <div className={degreeListItem}>
            <h4>Masters of Science in Computer Science</h4>
            <p>Graduated Spring 2019 with Magna Cum Laude Honors</p>
          </div>
          <div className={degreeListItem}>
            <h4>Bachelors of Science in Biological Science</h4>
            <p>
              Graduated Spring 2016 minoring in Computer Science and Chemistry
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationSection
