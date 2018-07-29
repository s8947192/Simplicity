import React from 'react'
import styles from './brand.scss'
import cn from 'classnames'

import defaultCardImg from 'universal/assets/icons/cards/credit-card.svg'
import visaImg from 'universal/assets/icons/cards/visa.svg'
import mastercardImg from 'universal/assets/icons/cards/mastercard.svg'

const Brand = ({ size, name, className }) => {
  const isBrand = name && name !== 'unknown'
  return (
    <div className={cn(className, styles.cardType)}>
      { !isBrand && <img width={size} height={size} src={defaultCardImg} /> }
      { name === 'visa' && <img width={size} height={size} src={visaImg} /> }
      { name === 'mastercard' && <img width={size} height={size} src={mastercardImg} /> }
    </div>
  )
}

export default Brand
