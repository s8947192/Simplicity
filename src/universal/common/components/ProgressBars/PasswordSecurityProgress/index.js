import React from 'react'
import cn from 'classnames'

import styles from './styles.scss'

const PasswordSecurityProgress = ({
  currentString,
  maxLength = 12
}) => {
  const currentLength = currentString ? currentString.length : 0
  const progress = 100 - 100 / maxLength * currentLength
  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressText}>weak</div>
      <div className={styles.progressWrapper}>
        <div
          style={{ width: `${progress}%` }}
          className={
            cn(
              { [styles.progressLine__noRightBorder]: progress < 100 },
              { [styles.progressLine__noBorder]: progress <= 0 },
              styles.progressLine
            )
          }
        />
      </div>
      <div className={styles.progressText}>strong</div>
    </div>
  )
}

export default PasswordSecurityProgress
