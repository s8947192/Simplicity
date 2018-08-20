import React from 'react'
import cn from 'classnames'
import { List, Map } from 'immutable'

import Button from 'universal/common/components/Button'

import freeSubscriptionImg from 'universal/assets/icons/subscription/free.svg'
import standardSubscriptionImg from 'universal/assets/icons/subscription/standard.svg'
import standardPlusSubscriptionImg from 'universal/assets/icons/subscription/standardPlus.svg'
import businessSubscriptionImg from 'universal/assets/icons/subscription/business.svg'

import styles from './subscriptionCard.scss'

const data = List([
  Map({ title: 'free', img: freeSubscriptionImg, color: '#5e696f' }),
  Map({ title: 'standard_plus', img: standardPlusSubscriptionImg, color: '#41a181' }),
  Map({ title: 'standard', img: standardSubscriptionImg, color: '#fa7a06' }),
  Map({ title: 'business', img: businessSubscriptionImg, color: '#2faff0' })
])

const SubscriptionCard = ({
  img,
  title,
  desc,
  price,
  color,
  isActive,
  onClick
}) => {
  const currentData = data.find(el => el.get('title') === title)
  return (
    <div className={cn(styles.subscription, {[styles['subscription--active']]: isActive})}>
      <div className={styles.info}>
        <div className={styles.info__el}>
          <img src={currentData.get('img')} className={cn(styles.img, {[styles['img--active']]: isActive})} />
          <div className={styles.info__desc}>
            <div className={styles.info__desc__title} style={{ color: currentData.get('color') }}>{title}</div>
            <div className={styles.info__desc__main}>{desc}</div>
          </div>
        </div>
        <div className={styles.info__el}>
          <span className={styles.sign}>$</span>
          <span className={styles.value}>{price}</span>
          <span className={styles.duration}>/mo</span>
        </div>
      </div>
      <div className={styles.button}>
        { isActive && <Button value='SELECTED' className={styles.selected} /> }
        { !isActive && <Button onClick={onClick} value='SELECT' /> }
      </div>
    </div>
  )
}
export default SubscriptionCard
