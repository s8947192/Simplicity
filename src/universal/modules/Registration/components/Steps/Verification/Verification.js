import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import { Link } from 'react-router-dom'
import { List, Map } from 'immutable'

import TitleDevider from 'universal/common/components/TitleDevider'
import Checkbox from 'universal/common/components/FormFields/Checkbox'
import Button from 'universal/common/components/Button'

import StepCard from './StepCard'

import databaseImg from 'universal/assets/icons/common/database.svg'
import accountImg from 'universal/assets/icons/registration/account.svg'
import subscriptionImg from 'universal/assets/icons/registration/subscription.svg'
import mainSettingsImg from 'universal/assets/icons/registration/mainSettings.svg'
import paymentMethodImg from 'universal/assets/icons/registration/paymentMethod.svg'

import styles from './verification.scss'

const Verification = ({  }) => {
  return (
    <form>
      <TitleDevider
        img={databaseImg}
        text='Steps to be checked'
      />
      <StepCard
        img={accountImg}
        title='Account'
        editStep={0}
        values={List([
          Map({ title: 'user info', value: 'Peter Parker (Spiderman)' }),
          Map({ title: 'email', value: 'spiderman@gmail.com' }),
          Map({ title: 'password', value: 'qwerty123' })
        ])}
      />
      <StepCard
        img={subscriptionImg}
        title='Subscription'
        editStep={1}
        values={List([
          Map({ title: 'subscription', value: 'Business' }),
          Map({ title: 'duration', value: '3 month' }),
          Map({ title: 'original price', value: '$146.97/mo' }),
          Map({ title: 'you save', value: '$18' }),
          Map({ title: 'total payout', value: '$128' })
        ])}
      />
      <StepCard
        img={mainSettingsImg}
        title='Main Settings'
        editStep={2}
        values={List([
          Map({ title: 'system language', value: 'English' }),
          Map({ title: 'system currency', value: 'Euro' })
        ])}
      />
      <StepCard
        img={paymentMethodImg}
        title='Payment Method'
        editStep={3}
        values={List([
          Map({ title: 'payment method', value: 'credit card' }),
          Map({ title: 'card number', value: '4242 4242 4242 4242' }),
          Map({ title: 'name on card', value: 'Peter Parker' }),
          Map({ title: 'expiration date', value: '11/21' }),
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
