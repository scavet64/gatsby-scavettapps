import React from "react";

import styles from './navigation-bar.module.scss';

import NavButton from './nav-button/nav-button'

import Image from '../image'

const NavigationBar = () => {

  return (
    <section className={styles.navigationColor}>
      <div className={styles.contentContainer}>
        <div className={styles.title}>
          <div className={styles.titleLogoWrapper}>
            <Image></Image>
          </div>

          <div>StarBrite Solutions</div>
        </div>
        <div className={styles.buttonContainer}>
          <NavButton scrollingTo="services" content="Services" ></NavButton>
          <NavButton scrollingTo="portfolio" content="Portfolio" ></NavButton>
          <NavButton scrollingTo="pricing" content="Pricing" ></NavButton>
        </div>

      </div>

    </section>
  )
}

export default NavigationBar