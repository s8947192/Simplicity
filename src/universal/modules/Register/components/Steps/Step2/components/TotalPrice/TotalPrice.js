import React, { Component } from 'react'
import cn from 'classnames'

import Card from './Card'

import styles from './totalPrice.scss'

const durationDiscount = {
  '1': 0,
  '3': 0.1,
  '6': 0.2
}

const TotalPrice = ({ duration, price }) => {
  const discount = durationDiscount[duration]
  const discountInPercent = discount * 100
  const durationPrice = (price * duration).toFixed(2)
  const adjustedPrice = ((durationPrice) * (1 - discount)).toFixed(2)
  return (
    <div className={styles.wrapper}>
      <Card
        isShaded={!discount}
        title='Discount'
        value={discountInPercent}
        pattern={`%s%`}
        type='%'
      />
      {
        !!discount && (
          <Card
            isShaded
            title='Original Price'
            value={durationPrice}
            pattern={`$%s`}
          />
        )
      }
      <Card
        isExpanded={!discount}
        isImproved={discount}
        title='Checkout Price'
        value={adjustedPrice}
        pattern={`$%s`}
      />
    </div>
  )
}

export default TotalPrice
