import React from 'react'
import cn from 'classnames'


import styles from './totalPrice.scss'

const TotalPrice = ({ selectedDuration, selectedSubscription }) => (
  <div className={styles.wrapper}>
    <div className={styles.label}>total price:</div>
    <div className={styles.value}>{`$${(selectedDuration * 8.99).toFixed(2)}`}</div>
  </div>
)

export default TotalPrice
