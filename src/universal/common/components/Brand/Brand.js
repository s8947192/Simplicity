import React from 'react'
import styles from './brand.scss'
import cn from 'classnames'

const Brand = ({ size, name, className }) => {
  const isBrand = name && name !== 'unknown'
  const cardIcon = isBrand ? `fa fa-cc-${name}` : 'fa fa-credit-card'
  const cardStyle = isBrand ? styles[`cardType_${name}`] : styles.cardType_noCard
  return (
    <div className={cn(className, styles.cardType)}>
      <i className={cn(cardIcon, cardStyle)} />
    </div>
  )
}

export default Brand
