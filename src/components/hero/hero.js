import React from "react"

import s from "./hero.module.scss"

const HeroComponent = () => {
  return (
    <section id="landing" className={s.background}>
      <div className={s.heroHolder}>
        <h1 className={s.heroTitle}>Hello, I'm Vincent Scavetta</h1>
        <p className={s.subtitleStyle}>Creator of Scavettapps</p>
      </div>
    </section>
  )
}

export default HeroComponent
