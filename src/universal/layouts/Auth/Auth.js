import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './auth.scss'

const AuthLayout = ({ children }) => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.nav}>
        <NavLink to='/login' className={styles.nav__el} activeClassName={styles['nav__el--active']}>sign in</NavLink>
        <NavLink to='/registration' className={styles.nav__el} activeClassName={styles['nav__el--active']}>sign up</NavLink>
      </div>
      <div className={styles.devider} />
      { children }
    </div>
  </div>
)

export default AuthLayout
