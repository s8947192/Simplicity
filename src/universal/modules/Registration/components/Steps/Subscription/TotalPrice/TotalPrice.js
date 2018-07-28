import React from 'react'
import cn from 'classnames'

import styles from './totalPrice.scss'

const TotalPrice = ({ originalPrice, discount }) => {
  const totalSave = originalPrice * discount
  const totalBilled = originalPrice * (1 - discount)
  return (
    <div className={styles.component}>
      <div className={styles.card}>
        <div>original price</div>
        <div className={styles.value}>${ originalPrice }</div>
      </div>
      <div className={styles.devider} />
      <div className={styles.card}>
        <div>you save</div>
        <div className={cn(styles.value, styles['value--green'])}>${ totalSave }</div>
      </div>
      <div className={styles.devider} />
      <div className={styles.card}>
        <div>total billed</div>
        <div className={cn(styles.value, styles['value--green'])}>${ totalBilled }</div>
      </div>
    </div>
  )
}

export default TotalPrice
