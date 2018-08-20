import React from 'react'
import cn from 'classnames'

import Puff from 'universal/common/components/Preloaders/Puff'

import requiredImg from 'universal/assets/icons/input/required.svg'
import errorImg from 'universal/assets/icons/input/error.svg'
import successImg from 'universal/assets/icons/input/success.svg'

import styles from './input.scss'

const Input = ({
  input,
  label,
  type,
  placeholder,
  meta,
  className
}) => {
  const isRequired = meta.error === 'required'
  const isError = meta.error && !isRequired
  const isSuccess = !isError && !meta.asyncValidating
  return (
    <div className={cn(styles.component, className)}>
      { isRequired && <img className={styles.img} src={requiredImg} /> }
      { isError && <img className={styles.img} src={errorImg} /> }
      { isSuccess && input.value.length !== 0 && <img className={styles.img} src={successImg} /> }
      { meta.asyncValidating && <div className={styles.asyncLoader}><Puff /></div> }
      <div className={styles.labelWrapper}>
        <label className={cn(styles.component__label, {[styles['component__label--active']]: meta.active})} htmlFor={input.name}>{label}</label>
        {
          meta.error && (
            <div className={cn(
              styles.info,
              { [styles.info__required]: isRequired },
              { [styles.info__error]: isError }
            )}>{ meta.error }</div>
          )
        }
      </div>
      <input type={type} id={input.name} {...input} className={styles.input} placeholder={placeholder} autoComplete='off' />
    </div>
  )
}

export default Input
