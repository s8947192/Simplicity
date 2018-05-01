import React from 'react'

import styles from './appLayout.scss'

const AppLayout = ({ children }) => (
  <div className={styles.app}>
    { children }
  </div>
)

export default AppLayout
