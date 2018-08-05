import React from 'react'
import cn from 'classnames'

import Button from 'universal/common/components/Button'

import styles from './stepCard.scss'

const StepCard = ({
  img,
  title,
  editStep,
  values,
  isCompleted
}) => {
  return (
    <div className={styles.component}>
      <img className={styles.img} src={img} />
      <div className={styles.main}>
        <div className={styles.titleWrapper}>
          <span className={styles.title}>{ title }</span>
          <span className={cn(
            styles.title_value,
            {[styles['title_value--completed']]: isCompleted}
          )}>{ isCompleted ? 'completed' : 'not completed' }</span>
        </div>
        {
          isCompleted && (
            values.map((row, index) =>
              <div key={index} className={styles.row}>
                <span>{ `${row.get('title')}: ` }</span>
                <span className={styles.row__value}>{ row.get('value') }</span>
              </div>
            )
          )
        }
      </div>
      <div>
        <Button type='small--shaded' value={isCompleted ? 'edit' : 'add'} />
      </div>
    </div>
  )
}

export default StepCard
