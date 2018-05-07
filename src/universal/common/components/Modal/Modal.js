import React from 'react'

import styles from './modal.scss'

const Modal = () => (
  <div className={styles.overlay}>
    <div className={styles.layout}>
      <div className={styles.modalWrapper}>
        <div className={styles.warningHeader}>
          <img className={styles.warningIcon} src={warningIcon} />
          <div className={styles.warningTitle}>not saved changes will not be lost</div>
        </div>
        <div className={styles.warningDesc}>would you still want to proceed?</div>
        <div className={styles.buttonsWrapper}>
          <Button title='cancel' />
          <Button type='green' title='proceed' />
        </div>
      </div>
    </div>
  </div>
)

export default Modal
