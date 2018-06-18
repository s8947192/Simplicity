import React from 'react'
import cn from 'classnames'

import Puff from 'universal/common/components/Spinners/Puff/Puff'

import styles from './styles.scss'

const Input = ({
  input,
  label,
  type,
  placeholder='',
  meta
}) => {
  const isRequired = meta.error === 'required'
  const isError = meta.error && !isRequired
  const isSuccess = !isRequired && !isError
  // console.log(meta.error)
  return (
    <div className={styles.container}>
      <div className={styles.labelWrapper}>
        { label && label.length && <label className={styles.label}>{ label }</label> }
        {
          !meta.asyncValidating && (
            <div className={styles.infoWrapper}>
              <div className={cn(
                styles.info,
                { [styles.info__alert]: isRequired },
                { [styles.info__error]: isError },
                { [styles.info__success]: isSuccess }
              )}>{ meta.error ? meta.error : 'ready' }</div>
              <div className={cn(
                styles.sign,
                { [styles.sign__alert]: isRequired },
                { [styles.sign__error]: isError },
                { [styles.sign__success]: isSuccess }
              )} />
            </div>
          )
        }
      </div>
      <div className={styles.inputWrapper}>
        {
          meta.asyncValidating && (
            <div className={styles.tailSpinWrapper}>
              <Puff />
            </div>
          )
        }
        <input
          {...input}
          className={styles.input}
          placeholder={placeholder}
          type={type}
        />
      </div>
    </div>
  )
}

export default Input
