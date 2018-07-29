import React from 'react'
import { connect } from 'react-redux'
import cn from 'classnames'
import styles from './inputContainer.scss'

import Brand from 'universal/common/components/Brand'

import requiredImg from 'universal/assets/icons/input/required.svg'
import errorImg from 'universal/assets/icons/input/error.svg'
import successImg from 'universal/assets/icons/input/success.svg'

const InputContainer = Component => {
  const HoC = ({
    input,
    label,
    placeholder,
    className,
    meta
  }) => {

    const handleChange = valid => input.onChange(valid)

    const isRequired = input.value === '' || input.value === false || (input.value.complete === false && !input.value.error)
    const isError = !isRequired && input.value.error

    return (
      <div className={cn(styles.component, className)}>
        { isRequired && <img className={styles.img} src={requiredImg} /> }
        { isError && <img className={styles.img} src={errorImg} /> }
        { !isRequired && !isError && <img className={styles.img} src={successImg} /> }
        <div className={styles.labelWrapper}>
          <label htmlFor={input.name}>{label}</label>
          { isRequired && <div className={cn(styles.info, styles.info__required)}>required</div> }
          { isError && <div className={cn(styles.info, styles.info__error)}>{ input.value.error.message }</div> }
        </div>
        <div className={styles.input}>
          { input.name === 'cardNumber' && <Brand size={30} name={input.value.brand} className={styles.brand} /> }
          <div className={styles.inputWrapper}>
            <Component {...input} onChange={handleChange} />
          </div>
        </div>
      </div>
    )
  }

  return connect((state, ownProps) => ({ error: null }))(HoC)
}

export default InputContainer
