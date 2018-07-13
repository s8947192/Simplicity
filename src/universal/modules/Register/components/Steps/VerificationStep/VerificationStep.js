import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import cn from 'classnames'

import Button from 'universal/common/components/Button'

import checkIcon from 'universal/assets/icons/check.svg'
import warningIcon from 'universal/assets/icons/warning.svg'

import styles from './verificationStep.scss'

const Checkbox = ({ input, meta }) => (
  <div className="form-group">
    <input type='checkbox' id={input.name} {...input} />
    {meta.touched && meta.error && (
      <p className="error">{meta.error}</p>
    )}
  </div>
)

class VerificationStep extends Component {
  render() {
    return (
      <form className={styles.wrapper}>
        <div className={styles.el}>
          <img className={styles.img} src={checkIcon} />
          <div>
            <div className={styles.title}>Account</div>
            <div className={styles.row}>
              <span className={styles.desc}>email:</span>
              <span className={styles.value}>{'test@gmail.com'}</span>
            </div>
            <div className={styles.row}>
              <span className={styles.desc}>username:</span>
              <span className={styles.value}>Stan_007</span>
            </div>
          </div>
        </div>
        <div className={styles.el}>
          <img className={styles.img} src={checkIcon} />
          <div>
            <div className={styles.title}>Subscription</div>
            <div className={styles.row}>
              <span className={styles.desc}>subscription:</span>
              <span className={styles.value}>standart+</span>
            </div>
            <div className={styles.row}>
              <span className={styles.desc}>expires:</span>
              <span className={styles.value}>{'21.07.2018'}</span>
            </div>
          </div>
        </div>
        <div className={styles.el}>
          <img className={styles.img} src={checkIcon} />
          <div>
            <div className={styles.title}>Payment Method</div>
            <div className={styles.row}>
              <span className={styles.desc}>card number:</span>
              <span className={styles.value}>4242 1121 4414 2231</span>
            </div>
            <div className={styles.row}>
              <span className={styles.desc}>your card will be charged for:</span>
              <span className={styles.value}>$40</span>
            </div>
          </div>
        </div>
        <div className={styles.el}>
          <img className={styles.img} src={warningIcon} />
          <div>
            <div className={styles.title}>System Settings</div>
            <div className={styles.row}>
              <span className={styles.desc}>interface language:</span>
              <span className={cn(styles.value, styles['value--red'])}>not selected</span>
            </div>
            <div className={styles.row}>
              <span className={styles.desc}>default currency:</span>
              <span className={cn(styles.value, styles['value--red'])}>not selected</span>
            </div>
          </div>
        </div>
        <div className={styles.devider} />
        <Field
          name='termsAndPolices'
          type='checkbox'
          component={props => <Checkbox {...props} />}
        />
        <div className={styles.buttonWrapper}>
          <Button title='Complete' type='green' disabled />
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'verificationForm'
})(VerificationStep)
