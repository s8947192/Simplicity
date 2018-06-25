import React from 'react'
import cn from 'classnames'
import styles from './defaultValueRenderer.scss'

const DefaultValueRenderer = ({ children, value }) => (
  <div className={cn('Select-value', styles.value)}>
    <span className={cn('Select-value-label', styles.valueEl)}>
      { value.icon && <img height={value.icon.size} className={styles.icon} src={value.icon.src} /> }
      { children }
    </span>
  </div>
)

export default DefaultValueRenderer
