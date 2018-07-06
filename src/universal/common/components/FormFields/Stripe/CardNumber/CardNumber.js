import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CardNumberElement } from 'react-stripe-elements'
import cn from 'classnames'

import InputContainer from '../InputContainer'
import Brand from 'universal/common/components/Brand'

import styles from './cardNumber.scss'

class CardNumber extends Component {
  constructor() {
    super()
    this.state = {
      brandName: null
    }
  }

  onHandleChange = data => {
    const { onChange } = this.props
    this.setState({ brandName: data.brand })
    onChange(data)
  }

  render() {
    const { brandName } = this.state
    const {
      onChange,
      className,
      placeholder = 'Card Number',
      ...inputOptions
    } = this.props
    return (
      <div className={styles.wrapper}>
        <Brand name={brandName} className={styles.brandMargin} />
        <CardNumberElement
          className={cn(styles.input, className)}
          {...inputOptions}
          placeholder={placeholder}
          onChange={data => this.onHandleChange(data)}
        />
      </div>
    )
  }
}

CardNumber.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default InputContainer(CardNumber)
