import React from 'react'
import cn from 'classnames'

import styles from './button.scss'

const Button = ({ title, type, textUppercase, onClick, disabled }) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        styles.button,
        {[styles[`button_${type}`]]: type},
        {[styles['button_default']]: !type || type === 'default'},
        {[styles['button_disabled']]: disabled},
      )}
      style={textUppercase && { textTransform: 'uppercase' }}
    >{ title }</div>
  )
}

export default Button
