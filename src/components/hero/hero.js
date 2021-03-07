import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import s from "./hero.module.scss"

const HeroComponent = () => {
  return (
    <section id="landing" className={s.background}>
      <div className={s.heroHolder}>
        <StaticImage
          className={s.logo}
          src="../../images/scavettapps-logo.svg"
          alt="Scavettapps Logo"
          placeholder="blurred"
        />

        <h1 className={s.heroTitle}>Hello, I'm Vincent Scavetta</h1>
        <p className={s.subtitleStyle}>Creator of Scavettapps</p>
      </div>
    </section>
  )
}

export default HeroComponent