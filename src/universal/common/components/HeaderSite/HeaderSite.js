import React from 'react'
import { NavLink } from 'react-router-dom'

import Logo from 'universal/common/components/Logo'

import styles from './headerSite.scss'

const HeaderSite = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <Logo />
      <NavLink to='/home' className={styles.item} activeClassName={styles.active}>home</NavLink>
      <NavLink to='/features' className={styles.item} activeClassName={styles.active}>features</NavLink>
      <NavLink to='/pricing' className={styles.item} activeClassName={styles.active}>pricing</NavLink>
      <NavLink to='/contacts' className={styles.item} activeClassName={styles.active}>contacts</NavLink>
      <NavLink to='/login' className={styles.item} activeClassName={styles.active}>sign in</NavLink>
      <NavLink to='/registration' className={styles.item} activeClassName={styles.active}>sign up</NavLink>
    </div>
  </div>
)

export default HeaderSite
