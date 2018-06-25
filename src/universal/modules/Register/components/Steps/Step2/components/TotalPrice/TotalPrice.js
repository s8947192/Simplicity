import React from 'react'
import cn from 'classnames'

import styles from './totalPrice.scss'

const discounts = {
  '1': 0,
  '3': 0.1,
  '6': 0.2
}

const TotalPrice = ({ duration, price }) => {

  const discount  = 1 - discounts[duration]
  const discountedPrice = (price * duration * discount).toFixed(2)

  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>total price:</div>
      <div className={styles.value}>{ price > 0 ? `$${discountedPrice}` : 'FREE'}</div>
    </div>
  )
}

export default TotalPrice
