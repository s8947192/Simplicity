import React from 'react'

import Button from 'universal/common/components/Button'

import profileImg from 'universal/assets/icons/common/profile.svg'

import styles from './done.scss'

const Done = ({  }) => {
  return (
    <div className={styles.component}>
      <img className={styles.img} src={profileImg} />
      <div className={styles.greeting}>
        <span className={styles.greeting__user}>Peter</span>,
        <span> you can now enter you account</span>
      </div>
      <Button value='Enter' />
    </div>
  )
}

export default Done
