import React from 'react'

import styles from './headerSite.scss'

const HeaderSite = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.logo}>LOGO</div>
      <div className={styles.item}>home</div>
      <div className={styles.item}>features</div>
      <div className={styles.item}>pricing</div>
      <div className={styles.item}>contacts</div>
      <div className={styles.item}>sign in</div>
      <div className={styles.item}>sign up</div>
    </div>
  </div>
)

export default HeaderSite
