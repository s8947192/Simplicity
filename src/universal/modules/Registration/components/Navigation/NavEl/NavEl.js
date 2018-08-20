import React from 'react'
import cn from 'classnames'

import tickImg from 'universal/assets/icons/registration/tick.svg'

import styles from './navEl.scss'

const NavEl = ({
  isDone,
  isActive,
  img,
  text,
  onClick,
  isDisabled
}) => (
  <div
    onClick={!isDisabled && !isActive ? onClick : undefined}
    className={cn(styles.component, {[styles['component--disabled']]: isDisabled})}
  >
    { isDone && (
      <div className={styles.iconWrapper}>
        <img className={styles.isDone} src={tickImg} />
      </div>
    )}
    { img && <img className={styles.icon} src={img} /> }
    <div className={cn(styles.text, { [styles.text__active]: isActive })}>{ text }</div>
  </div>
)

export default NavEl
