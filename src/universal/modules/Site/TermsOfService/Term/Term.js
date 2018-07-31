import React from 'react'

import styles from './term.scss'

const Term = ({ title, index, component }) => (
  <div className={styles.component}>
    { title && <div className={styles.title}>{ `${index}) ${title}` }</div> }
    <div className={styles.text}>
      { component }
    </div>
  </div>
)

export default Term
