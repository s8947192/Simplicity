import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import { List, Map } from 'immutable'

import TermsOfService from 'universal/modules/Site/TermsOfService'

import Checkbox from 'universal/common/components/FormFields/Checkbox'
import Button from 'universal/common/components/Button'
import Confirm from 'universal/common/components/Confirm'

import cancelImg from 'universal/assets/icons/common/cancel.svg'
import walletImg from 'universal/assets/icons/common/wallet.svg'

import styles from './verification.scss'

const message = `
  Hey, Peter! You are about to buy "Business" subscription for 6 month, which will cost $128 for you. Press "AGREE" button,
  so we can withdraw money from your card, register your account and grand access to your selected subscription right away.
`

class Verification extends Component {
  constructor(props) {
    super(props)
    this.state = {
      termsModalOpen: false,
      paymentModalOpen: false
    }
  }

  toggleModal = field => this.setState({ [field]: !this.state[field] })

  onTermsConfirm = () => {
    this.toggleModal('termsModalOpen')
    if (!this.props.isAgreedWithTerms) {
      this.props.change('termsAndPolices', true)
    }
  }

  onRegisterClick = () => {
    if (this.props.isPaymentMethodAvailable) {
      return this.toggleModal('paymentModalOpen')
    } else {
      this.props.registrate()
    }
  }

  render() {
    const {
      isAgreedWithTerms,
      isStep0Completed,
      isStep1Completed,
      isStep2Completed,
      isPaymentMethodAvailable,
      registrate,
    } = this.props
    const {
      termsModalOpen,
      paymentModalOpen
    } = this.state
    const allStepsCompleted = isStep0Completed && isStep1Completed && (isStep2Completed || !isPaymentMethodAvailable)
    return (
      <form className={styles.container}>
        <Confirm isOpen={paymentModalOpen}
          onClose={() => this.toggleModal('paymentModalOpen')}
          onConfirm={() => registrate()}
          title='Subscription Buying Confirmation'
          img={walletImg}
          message={message}
        />
        <Confirm isOpen={termsModalOpen} width={900}
          onClose={() => this.toggleModal('termsModalOpen')}
          onConfirm={() => this.onTermsConfirm()}
        >
          <TermsOfService />
        </Confirm>
        {
          !allStepsCompleted && (
            <div className={styles.errors}>
              <div className={styles.errors__header}>verification errors:</div>
              {
                !isStep0Completed && (
                  <div className={styles.errors__error}>
                    <img className={styles.errors__img} src={cancelImg} />
                    <span>Account step is not completed</span>
                  </div>
                )
              }
              {
                !isStep1Completed && (
                  <div className={styles.errors__error}>
                    <img className={styles.errors__img} src={cancelImg} />
                    <span>Subscription step is not completed</span>
                  </div>
                )
              }
              {
                !isStep2Completed && isPaymentMethodAvailable && (
                  <div className={styles.errors__error}>
                    <img className={styles.errors__img} src={cancelImg} />
                    <span>Payment Method step is not completed</span>
                  </div>
                )
              }
            </div>
          )
        }
        <div className={styles.termsAndPolices}>
          <Field name='termsAndPolices' component={Checkbox} />
          <div className={styles.termsAndPolices__text}>
            <span>read our </span>
            <span onClick={() => this.toggleModal('termsModalOpen')} className={styles.termsAndPolices__link}>terms and polices?</span>
          </div>
        </div>
        <Button disabled={!isAgreedWithTerms || !allStepsCompleted} value='register' onClick={this.onRegisterClick} />
      </form>
    )
  }
}

export default reduxForm({
  form: 'verification'
})(Verification)
