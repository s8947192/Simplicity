import React from 'react'
import { injectStripe } from 'react-stripe-elements'
import { Field, reduxForm } from 'redux-form/immutable'

import {
  requiredCheck,
  nameCheck
} from 'universal/utils/formFieldsValidation'

import Input from 'universal/common/components/FormFields/Input'

import {
  CardNumber,
  CardExpiry,
  Zipcode,
  CardCVC
} from 'universal/common/components/FormFields/Stripe'

import styles from './stripePayment.scss'

const onSubmit = ({ stripe, ...props }) => values => {
  stripe.createToken().then(token => console.log(token))
}

const StripePaymentForm = ({ handleSubmit, ...props }) => (
  <form id='stripe-payment-form' onSubmit={handleSubmit(onSubmit(props))}>
    <div className={styles.formWrapper}>
      <Field
        name='cardNumber'
        label='Card Number'
        component={CardNumber}
      />
      <Field
        name='nameOnCard'
        label='Name on card'
        placeholder='Enter name on your card...'
        component={Input}
        validate={[
          requiredCheck,
          nameCheck
        ]}
      />
      <div className={styles.fieldsWrapper}>
        <Field
          name='cvc'
          label='CVC'
          component={CardCVC}
          className={styles.fieldWrapper}
        />
        <Field
          name='expirity'
          label='Expirity'
          component={CardExpiry}
          className={styles.fieldWrapper}
        />
      </div>
    </div>
  </form>
)

export default reduxForm({
  form: 'paymentMethod'
})(injectStripe(StripePaymentForm))
