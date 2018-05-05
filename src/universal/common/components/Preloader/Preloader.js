import React from 'react'
import cn from 'classnames'

import styles from './preloader.scss'

const Preloader = () => (
  <div className={styles['sk-circle']}>
    <div className={cn(styles['sk-circle1'], styles['sk-child'])}></div>
    <div className={cn(styles['sk-circle2'], styles['sk-child'])}></div>
    <div className={cn(styles['sk-circle3'], styles['sk-child'])}></div>
    <div className={cn(styles['sk-circle4'], styles['sk-child'])}></div>
    <div className={cn(styles['sk-circle5'], styles['sk-child'])}></div>
    <div className={cn(styles['sk-circle6'], styles['sk-child'])}></div>
    <div className={cn(styles['sk-circle7'], styles['sk-child'])}></div>
    <div className={cn(styles['sk-circle8'], styles['sk-child'])}></div>
    <div className={cn(styles['sk-circle9'], styles['sk-child'])}></div>
    <div className={cn(styles['sk-circle10'], styles['sk-child'])}></div>
    <div className={cn(styles['sk-circle11'], styles['sk-child'])}></div>
    <div className={cn(styles['sk-circle12'], styles['sk-child'])}></div>
  </div>
)

export default Preloader
