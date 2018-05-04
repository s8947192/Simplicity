import React from 'react'
import cn from 'classnames'

import styles from './button.scss'

const Button = ({ title, type, textUppercase, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        styles.button,
        {[styles[`button_${type}`]]: type},
        {[styles['button_default']]: !type || type === 'default'},
      )}
      style={textUppercase && { textTransform: 'uppercase' }}
    >{ title }</div>
  )
}

export default Button
