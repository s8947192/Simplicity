import React from 'react'
import cn from 'classnames'

import selectedImg from 'universal/assets/icons/common/selection.svg'
import selectImg from 'universal/assets/icons/common/task.svg'

import styles from './durationCard.scss'

const DurationCard = ({
  title,
  desc,
  price,
  isActive,
  discount,
  onClick
}) => (
  <div onClick={onClick} className={cn(styles.duration, {[styles['duration--active']]: isActive})}>
    { isActive && <img src={selectedImg} className={styles.selected} /> }
    { !isActive && <img src={selectImg} className={styles.selected} /> }
    <div className={styles.info}>
      <div className={styles.info__title}>{ title }</div>
      <div className={styles.info__billing}>{ desc }</div>
    </div>
    <div className={styles.price}>
      <span className={styles.price__sign}>$</span>
      <span className={styles.price__value}>{ price }</span>
      <span className={styles.price__duration}>/mo</span>
    </div>
    { discount > 0 && <div className={cn(styles.discount, {[styles['discount--active']]: isActive})}>{`${100 * discount}% OFF`}</div>}
  </div>
)

export default DurationCard
