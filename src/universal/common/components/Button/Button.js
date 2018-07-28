import React from 'react'
import cn from 'classnames'

import styles from './button.scss'

const Button = ({ className, disabled, onClick, value, type='primary' }) => (
  <div className={cn(
    styles.button,
    { [styles[`button__${type}`]]: !disabled },
    { [styles[`button__disabled`]]: disabled },
    className
  )} onClick={!disabled ? onClick : undefined}>{ value }</div>
)

export default Button
