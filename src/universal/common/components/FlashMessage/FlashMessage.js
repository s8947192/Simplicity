import React from 'react'

import styles from './flashMessage.scss'

const FlashMessage = ({ message, onClick }) => {
  return (
    <div className={styles.errorInfoBottom}>
      <div className={styles.errorClose} onClick={onClick}>x</div>
      { message }
    </div>
  )
}

export default FlashMessage
