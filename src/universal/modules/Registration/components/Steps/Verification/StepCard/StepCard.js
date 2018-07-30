import React from 'react'

import Button from 'universal/common/components/Button'

import styles from './stepCard.scss'

const StepCard = ({ img, title, editStep, values }) => {
  return (
    <div className={styles.component}>
      <img className={styles.img} src={img} />
      <div className={styles.main}>
        <div className={styles.title}>{title}</div>
        {
          values.map((row, index) =>
            <div key={index} className={styles.row}>
              <span>{ `${row.get('title')}: ` }</span>
              <span className={styles.row__value}>{ row.get('value') }</span>
            </div>
          )
        }
      </div>
      <div>
        <Button type='small--shaded' value='edit' />
      </div>
    </div>
  )
}

export default StepCard
