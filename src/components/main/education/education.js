import React from "react"

import s from "./education.module.scss"

const EducationSection = () => {
  return (
    <section id="education">
      <h2>My Education</h2>

      <div className={s.educationContainer}>
        <div className={s.educationDescription}>
          <p>
            I attended Rowan University to first obtain my bachelors of science
            in biology with a minor in computer science and chemistry. After
            falling in love with computer science, I continued my education in
            computer science by also completing my graduate degree at Rowan
          </p>
        </div>

        <div className={s.degreeList}>
          <div className={s.degreeListItem}>
            <h4>Masters of Science in Computer Science</h4>
            <p>Graduated Spring 2019 with Magna Cum Laude Honors</p>
          </div>
          <div className={s.degreeListItem}>
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
