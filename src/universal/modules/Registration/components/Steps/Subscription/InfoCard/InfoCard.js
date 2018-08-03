import React from 'react'
import cn from 'classnames'
import { List, Map } from 'immutable'

import Button from 'universal/common/components/Button'

import freeImg from 'universal/assets/icons/subscription/free.svg'
import standardImg from 'universal/assets/icons/subscription/standard.svg'
import standardPlusImg from 'universal/assets/icons/subscription/standardPlus.svg'
import businessImg from 'universal/assets/icons/subscription/business.svg'

import styles from './infoCard.scss'

const subscriptionImages = List([
  Map({ title: 'free', img: freeImg }),
  Map({ title: 'standart', img: standardImg }),
  Map({ title: 'standart+', img: standardPlusImg }),
  Map({ title: 'business', img: businessImg }),
])

const InfoCard = ({
  img,
  title,
  value,
  isActive,
  onClick
}) => {
  const buttonType = isActive ? 'small--shaded' : 'small'
  const cardImage = subscriptionImages.find(image => image.get('title') === title)
  return (
    <div className={styles.component}>
      <div className={styles.title}>
        <img className={styles.title__img} src={cardImage.get('img')} />
        <div className={styles.title__text}>{ title }</div>
      </div>
      <div className={styles.textWrapper}>
        <span className={styles.text}>{ value > 0 ? `$${value}` : 'free' }</span>
        { value > 0 && <span className={cn(styles.text, styles['text--small'])}>/mo</span> }
      </div>
      <Button value={isActive ? 'selected' : 'select'} type={buttonType} onClick={onClick} />
    </div>
  )
}

export default InfoCard
