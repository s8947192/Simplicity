import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import styles from './InputContainer.scss'

const inputOptions = {
  style: {
    base: {
      fontSize: '14px',
      color: '#484848',
      fontFamily: 'Open Sans, sans-serif',
      '::placeholder': {
        color: 'rgba(0, 0, 0, .3)'
      }
    },
    invalid: {
      color: '#f74356'
    }
  }
}

const InputContainer = Component => {
  const HoC = ({ input, onChangeStatus, error, initialValue = '' }) => {

    const handleChange = (valid, data) => {
      input.onChange(valid)
      if (onChangeStatus) {
        onChangeStatus(valid, data)
      }
    }

    if (initialValue) {
      inputOptions.value = initialValue
    }

    return (
      <div className={cx(styles.component, {[styles.hasError]: error})}>
        <div className={styles.input}>
          <Component className={styles.StripeElement} {...inputOptions} onChange={handleChange} />
          <input {...input} type='hidden' />
        </div>
        {error && (
          <div className={styles.error}>
            <small>{error}</small>
          </div>
        )}
      </div>
    )
  }

  HoC.propTypes = {
    onChangeStatus: PropTypes.func,
    input: PropTypes.object.isRequired,
    error: PropTypes.string,
    initialValue: PropTypes.any
  }

  return connect((state, ownProps) => ({ error: null }))(HoC)
}

export default InputContainer
