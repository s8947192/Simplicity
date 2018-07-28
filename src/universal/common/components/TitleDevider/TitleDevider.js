import React from 'react'

import styles from './titleDevider.scss'

const TitleDevider = ({ img, text }) => {
  return (
    <div className={styles.component}>
      <img className={styles.img} src={img} />
      <div className={styles.text}>{ text }</div>
    </div>
  )
}

export default TitleDevider
