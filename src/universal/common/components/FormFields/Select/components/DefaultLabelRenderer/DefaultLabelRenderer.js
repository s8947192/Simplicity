import React from 'react'
import styles from './defaultLabelRenderer.scss'

const DefaultLabelRenderer = ({ label }) => (
  <div className={styles.wrapper}>
    <label className={styles.label}>{ label }</label>
  </div>
)

export default DefaultLabelRenderer
