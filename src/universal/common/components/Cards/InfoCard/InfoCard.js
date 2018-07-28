import React from 'react'
import cn from 'classnames'

import Button from 'universal/common/components/Button'

import styles from './infoCard.scss'

const InfoCard = ({ img, title, text, abbr, isActive }) => {
  const buttonType = isActive ? 'small--shaded' : 'small'
  return (
    <div className={styles.component}>
      <div className={styles.title}>
        <img className={styles.title__img} src={img} />
        <div className={styles.title__text}>{ title }</div>
      </div>
      <div className={styles.textWrapper}>
        <span className={styles.text}>{ text }</span>
        { abbr && <span className={cn(styles.text, styles['text--small'])}>{ abbr }</span> }
      </div>
      <Button value='select' type={buttonType} />
    </div>
  )
}

export default InfoCard
