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
  style
}) => {
  const paddingLeft = ['email', 'password', 'passwordRepeat'].some(el => el === name) ? 50 : 20
  return (
    <div style={style} className={styles.container}>
      <div className={styles.labelWrapper}>
        { label && label.length && <label className={styles.label}>{ label }</label> }
        { error && <div className={styles.inputError}>{ error }</div> }
      </div>
      <div className={styles.inputWrapper}>
        { name === 'email' && <EmailSVG className={styles.inputImg} /> }
        { (name === 'password' || name === 'passwordRepeat') && <PasswordSVG className={styles.inputImg} /> }
        <input id={name} type='text' name={name}
          style={{paddingLeft: paddingLeft}}
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
