import React from 'react'

import warningImg from 'universal/assets/icons/warning1.svg'

import styles from './notification.scss'

const Notification = ({ type='warning', message }) => (
  <div className={styles.info}>
    <img className={styles.infoIcon} width={24} src={warningImg} />
    { message }
  </div>
)

export default Notification
