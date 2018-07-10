import React from 'react'
import cn from 'classnames'
import styles from './defaultValueRenderer.scss'

const DefaultValueRenderer = ({ children, value }) => (
  <div className={cn('Select-value', styles.value)}>
    <span className={cn('Select-value-label', styles.valueEl)}>
      { value.imgSrc && <img height={24} className={styles.icon} src={value.imgSrc} /> }
      { children }
    </span>
  </div>
)

export default DefaultValueRenderer
