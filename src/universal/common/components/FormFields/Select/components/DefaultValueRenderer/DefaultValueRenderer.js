import React from 'react'
import cn from 'classnames'
import styles from './defaultValueRenderer.scss'

const DefaultValueRenderer = ({
  children,
  value: {
    imgSrc,
    imgSize=24
  }
}) => (
  <div className={cn('Select-value', styles.value)}>
    <span className={cn('Select-value-label', styles.valueEl)}>
      { imgSrc && <img width={imgSize} className={styles.icon} src={imgSrc} /> }
      { children }
    </span>
  </div>
)

export default DefaultValueRenderer
