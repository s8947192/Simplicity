import React from 'react'
import { injectStripe } from 'react-stripe-elements'
import { Field, reduxForm } from 'redux-form'

import Input from 'universal/common/components/FormFields/Input'

import {
  CardNumber,
  CardExpiry,
  Zipcode,
  CardCVC
} from 'universal/common/components/FormFields/Stripe'

import styles from './stripePaymentForm.scss'

const onSubmit = ({ stripe, ...props }) => values => {
  stripe.createToken().then(token => console.log(token))
}

const StripePaymentForm = ({ handleSubmit, ...props }) => (
  <form id='stripe-payment-form' onSubmit={handleSubmit(onSubmit(props))}>
    <div className={styles.formWrapper}>
      <label className={styles.label}>Card Number*</label>
      <Field name='cardNumber' component={CardNumber}/>
      <label className={styles.label}>Expirity*</label>
      <div className={styles.widthInExpirity}>
        <Field name='expiryValid' component={CardExpiry} />
      </div>
      <label className={styles.label}>CVC*</label>
      <div className={styles.widthInCVC}>
        <Field name='cvcValid' component={CardCVC} />
      </div>
    </div>
  </form>
)

export default reduxForm({
  form: 'paymentMethod'
})(injectStripe(StripePaymentForm))
