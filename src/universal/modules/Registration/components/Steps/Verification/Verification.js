import React, { Component } from 'react'
import ReactModal from 'react-modal'
import { Field, reduxForm } from 'redux-form/immutable'
import { List, Map } from 'immutable'

import TailSpinDotted from 'universal/common/components/Preloaders/TailSpinDotted'
import TermsOfService from 'universal/modules/Site/TermsOfService'

import Checkbox from 'universal/common/components/FormFields/Checkbox'
import Button from 'universal/common/components/Button'
import Confirm from 'universal/common/components/Confirm'

import cancelImg from 'universal/assets/icons/common/cancel.svg'
import walletImg from 'universal/assets/icons/common/wallet.svg'

import styles from './verification.scss'

const inlineStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.298)',
    zIndex: 1000,
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    top: 'none',
    left: 'none',
    right: 'none',
    bottom: 'none',
    position: 'absolute',
    border: 0,
    width: 200,
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    overflow: 'none',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}

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

  onPaymentConfirm = () => {
    this.toggleModal('paymentModalOpen')
    this.props.registrate()
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
      isPending,
      registrationError,
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
        <ReactModal
          style={inlineStyles}
          isOpen={isPending}
          ariaHideApp={false}
        >
          <TailSpinDotted />
          <div className={styles.spinnerText}>registrating new user...</div>
        </ReactModal>
        <Confirm isOpen={paymentModalOpen}
          onClose={() => this.toggleModal('paymentModalOpen')}
          onConfirm={() => this.onPaymentConfirm()}
          title='Subscription Buying Confirmation'
          img={walletImg}
          message={message}
        />
        <Confirm isOpen={termsModalOpen} width={900}
          onClose={() => this.toggleModal('termsModalOpen')}
          onConfirm={() => this.onTermsConfirm()}
        ><TermsOfService /></Confirm>
        {
          (!allStepsCompleted || registrationError) && (
            <div>
              <div className={styles.errors__header}>verification errors:</div>
              <div className={styles.errors}>
                {
                  registrationError && (
                    <div className={styles.errors__error}>
                      <img className={styles.errors__img} src={cancelImg} />
                      <span>{ registrationError }</span>
                    </div>
                  )
                }
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
