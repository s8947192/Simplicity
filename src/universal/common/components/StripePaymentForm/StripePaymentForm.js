import React from 'react'
import { injectStripe } from 'react-stripe-elements'
import { Field, reduxForm } from 'redux-form'
import _ from 'lodash'
import { Input } from 'universal/common/components/FormFields'
import { CardNumber, CardExpiry, Zipcode, CardCVC } from 'universal/common/components/FormFields/Stripe'
import cx from 'classnames'
import styles from './stripePaymentForm.scss'

const onSubmit = props => values => props.onSubmit(values, props.stripe)

export const StripePaymentForm = ({ handleSubmit, ...props }) => (
  <form id='stripe-payment-form' onSubmit={handleSubmit(onSubmit(props))}>
    <div className={styles.formWrapper}>
      <Field name='meta.numberValid' component={CardNumber}/>
      <Field name='meta.expiryValid' component={CardExpiry} />
      <Field name='meta.cvcValid' component={CardCVC} />
      <div className={cx(styles.cardType, 'col-md-2')}>
        <i className='fa fa-cc-visa' />
      </div>
    </div>
  </form>
)

export default reduxForm({
  form: 'paymentMethod',
  initialValues: {
    meta: {
      numberValid: false,
      expiryValid: false,
      cvcValid: false
    }
  }
})(injectStripe(StripePaymentForm))
