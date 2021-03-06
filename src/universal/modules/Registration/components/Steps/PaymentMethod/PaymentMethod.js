import React from 'react'
import { injectStripe } from 'react-stripe-elements'
import { Field, reduxForm } from 'redux-form/immutable'

import TitleDevider from 'universal/common/components/TitleDevider'
import { requiredCheck, nameCheck } from 'universal/utils/formFieldsValidation'
import { CardNumber, CardExpiry, CardCVC } from 'universal/common/components/FormFields/Stripe'
import Input from 'universal/common/components/FormFields/Input'
import Checkbox from 'universal/common/components/FormFields/Checkbox'
import Button from 'universal/common/components/Button'

import AvailableMethods from './AvailableMethods'

import creditCardImg from 'universal/assets/icons/cards/credit-card-1.svg'
import styles from './paymentMethod.scss'

const onSubmit = ({ stripe, ...props }) => values => {
  props.savePaymentData({ stripe, values })
}

const PaymentMethod = ({
  handleSubmit,
  isStripeTokenPending,
  isCVCValid,
  isExpirityValid,
  isCardValid,
  invalid,
  ...props
}) => {
  const isFormValid = isCVCValid && isExpirityValid && isCardValid && !invalid
  return (
    <div className={styles.container}>
      <form id='stripe-payment-form'>
        <div className={styles.formWrapper}>
          <Field
            name='cardNumber'
            label='Card Number'
            component={CardNumber}
            validate={[
              requiredCheck
            ]}
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
          <div className={styles.buttonWrapper}>
            <Button disabled={!isFormValid} onClick={handleSubmit(onSubmit(props))} value='complete' />
          </div>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'paymentMethod'
})(injectStripe(PaymentMethod))
