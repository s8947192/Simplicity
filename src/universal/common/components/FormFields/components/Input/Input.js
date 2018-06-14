import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import MaskedInput from 'react-maskedinput'
import styles from './input.scss'

class Input extends Component {
  render () {
    const {
      className,
      input,
      placeholder,
      type = 'text',
      noErrors,
      minLength,
      maxLength,
      meta,
      isCurrency,
      label,
      afterLabel,
      hideMaxLengthLabel,
      disabled,
      requiredAsterisk,
      mask
    } = this.props
    const touched = meta && meta.touched
    const error = meta && meta.error
    const hasError = !noErrors && touched && error

    const inputState = cx(className, {
      [styles.hasError]: hasError
    })

    const inputProps = {
      ...input,
      disabled: disabled,
      maxLength: maxLength,
      minLength: minLength,
      type: type,
      placeholder: placeholder,
      className: inputState
    }
    return (
      <div
        className={cx({
          [styles.hasAfterLabel]: afterLabel,
          [styles.hasError]: hasError,
          [styles.disabled]: disabled,
          [styles.requiredAsterisk]: requiredAsterisk
        })}>
        {label && (
          <div className={styles.label}>
            {label}
          </div>
        )}
        <div className={cx(styles.container, {
          [styles.isCurrency]: isCurrency,
          [styles.hasLimit]: (!hideMaxLengthLabel && !!maxLength)
        })}>
          {isCurrency && (
            <div className={styles.currencyPlaceholder}>
              <div className={styles.currencyPlaceholderValue}>
                $
              </div>
            </div>
          )}

          {mask
            ? <MaskedInput {...inputProps} mask={mask} />
            : <input {...inputProps} />
          }

          {(!hideMaxLengthLabel && maxLength) &&
            <span>{input.value.length}/{maxLength}</span>
          }
        </div>
        {hasError && (
          <div className={styles.error}>
            <small>{error}</small>
          </div>
        )}
        {afterLabel && (
          <div className={styles.afterLabel}>
            {afterLabel}
          </div>
        )}
      </div>
    )
  }
}

Input.propTypes = {
  input: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  noErrors: PropTypes.bool,
  minLength: PropTypes.number,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  isCurrency: PropTypes.bool,
  disabled: PropTypes.bool,
  meta: PropTypes.object,
  hideMaxLengthLabel: PropTypes.bool,
  requiredAsterisk: PropTypes.bool,
  afterLabel: PropTypes.string,
  mask: PropTypes.string
}

export default Input
