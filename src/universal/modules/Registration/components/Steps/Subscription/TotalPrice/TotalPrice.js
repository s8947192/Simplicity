import React from 'react'
import cn from 'classnames'
import { Map } from 'immutable'

import ValueCard from './ValueCard'

import styles from './totalPrice.scss'

const TotalPrice = ({ originalPrice, discount }) => {
  const price = parseFloat(originalPrice, 10)
  const totalSave = price * discount
  const totalBilled = (price - totalSave)
  return (
    <div className={styles.component}>
      <div className={styles.card}>
        <div>original price</div>
        <div className={styles.value}>
          <ValueCard value={price} label='$' />
        </div>
      </div>
      <div className={styles.devider} />
      <div className={styles.card}>
        <div>you save</div>
        <div className={cn(styles.value, styles['value--green'])}>
          <ValueCard value={totalSave} label='$' />
        </div>
      </div>
      <div className={styles.devider} />
      <div className={styles.card}>
        <div>total billed</div>
        <div className={cn(styles.value, styles['value--green'])}>
          <ValueCard value={totalBilled} label='$' />
        </div>
      </div>
    </div>
  )
}

export default TotalPrice
