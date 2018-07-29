import React from 'react'

import TitleDevider from 'universal/common/components/TitleDevider'
import StripePayment from 'universal/common/containers/StripePayment'

import AvailableMethods from './AvailableMethods'

import creditCardImg from 'universal/assets/icons/cards/credit-card-1.svg'

import styles from './paymentMethod.scss'

const PaymentMethod = () => (
  <div>
    <TitleDevider
      img={creditCardImg}
      text='Available payment methods'
    />
    <AvailableMethods />
    <StripePayment />
  </div>
)

export default PaymentMethod
