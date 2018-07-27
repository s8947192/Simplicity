import React from 'react'

import descriptionImg from 'universal/assets/icons/registration/description.svg'

import styles from './description.scss'

const text = 'Start effectively planning your meetings, manage transactions and monitor your activity from register your personal account'

const Description = () => (
  <div className={styles.component}>
    <div className={styles.header}>
      <img className={styles.img} src={descriptionImg} />
      <div className={styles.title}>Registration</div>
    </div>
    <div className={styles.description}>{ text }</div>
  </div>
)

export default Description
