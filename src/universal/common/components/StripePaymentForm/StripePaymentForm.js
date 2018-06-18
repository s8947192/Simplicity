import React from 'react'
import { injectStripe } from 'react-stripe-elements'
import { Field, reduxForm } from 'redux-form'
import Input from 'universal/common/components/Input'
// import { Input } from 'universal/common/components/FormFields'
import { CardNumber, CardExpiry, Zipcode, CardCVC } from 'universal/common/components/FormFields/Stripe'
import cn from 'classnames'
import styles from './stripePaymentForm.scss'

const onSubmit = props => values => {
  return props.onSubmit(values, props.stripe)
}

export const StripePaymentForm = ({ handleSubmit, ...props }) => (
  <form id='stripe-payment-form' onSubmit={handleSubmit(onSubmit(props))}>
    <div className={styles.formWrapper}>
      <Field type='text' name='nameOnCard' component={Input} placeholder='Name on Card' />
      <Field name='numberValid' component={CardNumber}/>
      <Field name='expiryValid' component={CardExpiry} />
      <Field name='cvcValid' component={CardCVC} />
      <div className={cn(styles.cardType, 'col-md-2')}>
        <i className='fa fa-cc-visa' />
      </div>
    </div>
  </form>
)

export default reduxForm({
  form: 'paymentMethod',
  // initialValues: {
  //   meta: {
  //     numberValid: false,
  //     expiryValid: false,
  //     cvcValid: false
  //   }
  // }
})(injectStripe(StripePaymentForm))
