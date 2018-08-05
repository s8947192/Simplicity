import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import { Link } from 'react-router-dom'
import { List, Map } from 'immutable'

import TermsOfService from 'universal/modules/Site/TermsOfService'

import TitleDevider from 'universal/common/components/TitleDevider'
import Checkbox from 'universal/common/components/FormFields/Checkbox'
import Button from 'universal/common/components/Button'
import Confirm from 'universal/common/components/Confirm'

import StepCard from './StepCard'

import databaseImg from 'universal/assets/icons/common/database.svg'
import walletImg from 'universal/assets/icons/common/wallet.svg'
import accountImg from 'universal/assets/icons/registration/account.svg'
import subscriptionImg from 'universal/assets/icons/registration/subscription.svg'
import mainSettingsImg from 'universal/assets/icons/registration/mainSettings.svg'
import paymentMethodImg from 'universal/assets/icons/registration/paymentMethod.svg'

import styles from './verification.scss'

const message = `
  Hey, Peter! You are about to buy "Business" subscription for 6 month, which will cost $128 for you. Press "AGREE" button,
  so we can withdraw money from your card, register your account and grand access to your selected subscription right away.
`

const discountMap = Map({ 1: 0, 3: 0.1, 6: 0.2 })

const definePrices = (subscription, duration) => {
  if (!subscription || !duration) return
  const originalPrice = subscription.get('price')
  const discount = discountMap.get(duration.toString())
  const price = parseFloat(originalPrice, 10)
  const totalSave = price * discount
  const totalBilled = (price - totalSave)
  return Map({
    originalPrice: (originalPrice * duration).toFixed(2),
    totalSave: (totalSave * duration).toFixed(2),
    totalBilled: (totalBilled * duration).toFixed(2)
  })
}

const Verification = ({
  firstName,
  lastName,
  nickName,
  email,
  password,
  subscription,
  subscriptionDuration,
  systemLanguage,
  systemCurrency,
  paymentMethod,
  savePaymentMethod,
  completedSteps
}) => {
  const prices = definePrices(subscription, subscriptionDuration)
  return (
    <form>
      {
        /*
        { console.log(paymentMethod) }
        { console.log(savePaymentMethod) }
        { console.log(completedSteps) }
        */
      }
      { console.log(paymentMethod && paymentMethod.getIn(['card', 'brand'])) }
      <Confirm isOpen={false}
        onClose={() => console.log('CLOSE')}
        onConfirm={() => console.log('CONFIRM')}
        title='Subscription Buying Confirmation'
        img={walletImg}
        message={message}
      />
      <Confirm isOpen={false} width={900}
        onClose={() => console.log('CLOSE')}
        onConfirm={() => console.log('CONFIRM')}
      >
        <TermsOfService />
      </Confirm>
      <TitleDevider
        img={databaseImg}
        text='Steps to be checked'
      />
      <StepCard
        isCompleted={completedSteps.has(0)}
        img={accountImg}
        title='Account'
        editStep={0}
        values={List([
          Map({ title: 'user info', value: `${firstName} ${lastName} (${nickName})` }),
          Map({ title: 'email', value: email }),
          Map({ title: 'password', value: password })
        ])}
      />
      <StepCard
        isCompleted={completedSteps.has(1)}
        img={subscriptionImg}
        title='Subscription'
        editStep={1}
        values={prices && List([
          Map({ title: 'subscription', value: subscription.get('title') }),
          Map({ title: 'duration', value: `${subscriptionDuration} month` }),
          Map({ title: 'original price', value: `$${prices.get('originalPrice')}` }),
          Map({ title: 'you save', value: `$${prices.get('totalSave')}` }),
          Map({ title: 'total payout', value: `$${prices.get('totalBilled')}` })
        ])}
      />
      <StepCard
        isCompleted={completedSteps.has(2)}
        img={mainSettingsImg}
        title='Main Settings'
        editStep={2}
        values={systemLanguage && systemCurrency && List([
          Map({ title: 'system language', value: systemLanguage.get('title') }),
          Map({ title: 'system currency', value: systemCurrency.get('title') })
        ])}
      />
      <StepCard
        isCompleted={completedSteps.has(3)}
        img={paymentMethodImg}
        title='Payment Method'
        editStep={3}
        values={paymentMethod && List([
          Map({ title: 'payment method', value: 'credit card' }),
          Map({ title: 'brand', value: paymentMethod.getIn(['card', 'brand']) }),
          Map({ title: 'card country', value: paymentMethod.getIn(['card', 'country']) }),
          Map({ title: 'last 4 digits', value: paymentMethod.getIn(['card', 'last4']) }),
          Map({ title: 'name on card', value: paymentMethod.getIn(['card', 'name']) }),
          Map({ title: 'expiration date', value: `${paymentMethod.getIn(['card', 'exp_month'])}/${paymentMethod.getIn(['card', 'exp_year'])}` }),
          Map({ title: 'save payment source', value: 'yes' })
        ])}
      />
      <div className={styles.termsAndPolices}>
        <Field
          name='termsAndPolices'
          component={Checkbox}
        />
        <div className={styles.termsAndPolices__text}>
          <span>Are you agree with our </span>
          <Link to='/terms' target='_blank' className={styles.termsAndPolices__link}>terms and polices?</Link>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <Button value='complete' />
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'verification'
})(Verification)
