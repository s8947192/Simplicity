import React from 'react'

import LogoSVG from 'universal/assets/icons/Logo'

import styles from './logo.scss'

const Logo = () => (
  <div className={styles.logo}>
    <LogoSVG />
    <div className={styles.titleWrapper}>
      <div className={styles.title}>
        <span className={styles.title__main}>simpli</span>
        <span className={styles.title__leading}>city</span>
      </div>
      <div className={styles.desc}>― online scheduling ―</div>
    </div>
  </div>
)

export default Logo
