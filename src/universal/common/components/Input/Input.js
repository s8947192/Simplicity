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
  const svgColor = isInFocus ? '#488dc8' : error ? '#bb8384' : value.length ? '#79af8a' : '#b0b3ba'
  return (
    <div className={styles.container} style={{ marginBottom: marginBottom || 0 }}>
      { label && label.length && <label className={styles.label}>{ label }</label> }
      <div className={styles.inputWrapper}>
        { name === 'email' && <EmailSVG className={styles.inputImg} color={svgColor} /> }
        { (name === 'password' || name === 'passwordRepeat') && <PasswordSVG className={styles.inputImg} color={svgColor} /> }
        <input id={name} type='text' name={name}
          className={cn(
            styles.input,
            { [styles.error]: !isInFocus && error },
            { [styles.success]: !isInFocus && !error && value.length }
          )}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
      { error && <div className={styles.inputError}>{ error }</div> }
    </div>
  )
}
