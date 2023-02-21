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
            I attended Rowan University and earned my Bachelor of Science in
            Biology with a minor in Computer Science and Chemistry. As my love
            for computer science grew, and I decided to pursue it further by
            obtaining my graduate degree. By combining my knowledge of biology
            and chemistry with my expertise in computer science, I have been
            able to approach problem-solving in a unique way, applying
            interdisciplinary thinking to develop innovative solutions.
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
