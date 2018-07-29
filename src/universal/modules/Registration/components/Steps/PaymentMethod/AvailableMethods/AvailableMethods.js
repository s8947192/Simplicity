import React from 'react'

import creditCardImg from 'universal/assets/icons/cards/credit-card-2.svg'

import styles from './availableMethods.scss'

const AvailableMethods = () => (
  <div className={styles.component}>
    <img className={styles.img} src={creditCardImg} />
    <div className={styles.text}>Credit card</div>
  </div>
)

export default AvailableMethods
