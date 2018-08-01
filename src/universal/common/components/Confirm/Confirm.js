import React from 'react'
import ReactModal from 'react-modal'
import objectAssignDeep from 'object-assign-deep'

import Button from 'universal/common/components/Button'

import closeImg from 'universal/assets/icons/common/close.svg'

import styles from './confirm.scss'

const inlineStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.298)',
    zIndex: 1000,
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    top: 'none',
    left: 'none',
    right: 'none',
    bottom: 'none',
    position: 'absolute',
    border: 0,
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    padding: 0,
    outline: 'none',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}

const Confirm = ({
  isOpen,
  title,
  message,
  img,
  onClose,
  confirmLabel='AGREE',
  denyLabel='CANCEL',
  onConfirm,
  children,
  width=400,
  height
}) => (
  <ReactModal
    contentLabel={title}
    style={inlineStyles}
    isOpen={isOpen}
    ariaHideApp={false}
    onRequestClose={onClose}
    shouldCloseOnOverlayClick={true}
  >
    <div className={styles.component} style={{ width: width, height: height }}>
      <img onClick={onClose} className={styles.close} src={closeImg} />
      { img && <img className={styles.img} src={img} /> }
      { title && <div className={styles.title}>{title}</div> }
      { message && <div className={styles.message}>{ message }</div> }
      { children }
      <div className={styles.buttons}>
        <Button onClick={onClose} className={styles.firstButton} value={denyLabel} type='primary--shaded' />
        <Button onClick={onConfirm} value={confirmLabel} />
      </div>
    </div>
  </ReactModal>
)

export default Confirm
