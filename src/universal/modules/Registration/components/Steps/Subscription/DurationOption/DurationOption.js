import React from 'react'

import Button from 'universal/common/components/Button'

import styles from './durationOption.scss'

const DurationOption = ({ text, textAfter, textAfterLabel, onClick, isActive }) => {
  return (
    <div onClick={onClick} className={styles.component}>
      <Button type={isActive ? 'small--shaded' : 'small'} value={text} />
      <div className={styles.after}>
        <span className={styles.after__value}>{ textAfter }</span>
        { textAfterLabel && <span className={styles.after__label}>{ textAfterLabel }</span> }
      </div>
    </div>
  )
}

export default DurationOption
