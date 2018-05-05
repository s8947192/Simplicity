import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './input.scss'
import EmailSVG from './assets/EmailSVG'
import PasswordSVG from './assets/PasswordSVG'

export default ({
  name,
  label,
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  error,
  isInFocus,
  marginBottom
}) => {
  return (
    <div className={styles.container} style={{ marginBottom: marginBottom || 0 }}>
      <div className={styles.labelWrapper}>
        { label && label.length && <label className={styles.label}>{ label }</label> }
        { error && <div className={styles.inputError}>{ error }</div> }
      </div>
      <div className={styles.inputWrapper}>
        { name === 'email' && <EmailSVG className={styles.inputImg} /> }
        { (name === 'password' || name === 'passwordRepeat') && <PasswordSVG className={styles.inputImg} /> }
        <input id={name} type='text' name={name}
          className={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
    </div>
  )
}
