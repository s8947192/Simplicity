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
  return (
    <div className={styles.container}>
      <div className={styles.labelWrapper}>
        <div className={styles.infoWrapper}>
          <div className={cn(
            styles.info,
            { [styles.info__alert]: !meta.asyncValidating && isRequired },
            { [styles.info__error]: !meta.asyncValidating && isError },
            { [styles.info__success]: !meta.asyncValidating && isSuccess },
            { [styles.info__validating]: meta.asyncValidating },
          )}>{ meta.error ? meta.error : meta.asyncValidating ? 'checking email' : 'ready' }</div>
        </div>
      </div>
      <div className={styles.inputWrapper}>
        {
          !meta.asyncValidating && (
            <div className={styles.iconWrapper}>
              <div className={cn(
                styles.sign,
                { [styles.sign__alert]: isRequired },
                { [styles.sign__error]: isError },
                { [styles.sign__success]: isSuccess }
              )} />
            </div>
          )
        }
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
          autoComplete='off'
          type={type}
        />
      </div>
    </div>
  )
}

export default Input
