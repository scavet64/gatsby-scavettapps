import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { heroHolder, logo, heroTitle, subtitleStyle } from "./hero.module.scss"

const HeroComponent = () => {
  return (
    <section id="landing">
      <div className={heroHolder}>
        <StaticImage
          className={logo}
          src="../../images/scavettapps-logo.svg"
          alt="Scavettapps Logo"
          placeholder="blurred"
        />

        <h1 className={heroTitle}>Hello, I'm Vincent Scavetta</h1>
        <p className={subtitleStyle}>Creator of Scavettapps</p>
      </div>
    </section>
  )
}

export default HeroComponent