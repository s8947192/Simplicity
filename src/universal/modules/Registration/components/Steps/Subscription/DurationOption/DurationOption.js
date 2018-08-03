import React from 'react'

import Button from 'universal/common/components/Button'

import styles from './durationOption.scss'

const DurationOption = ({ text, textAfter, textAfterLabel, onClick, isActive }) => {
  return (
    <div onClick={onClick} className={styles.component}>
      <div className={styles.after}>
        <span className={styles.after__value}>{ textAfter }</span>
        { textAfterLabel && <span className={styles.after__label}>{ textAfterLabel }</span> }
      </div>
      <Button type={isActive ? 'small--shaded' : 'small--red'} value={text} />
    </div>
  )
}

export default DurationOption
