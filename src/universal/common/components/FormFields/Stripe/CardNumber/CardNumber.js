import React from 'react'
import PropTypes from 'prop-types'
import InputContainer from '../InputContainer'
import { CardNumberElement } from 'react-stripe-elements'

const CardNumber = ({ onChange, className, placeholder = 'Card Number', ...inputOptions }) => (
  <CardNumberElement
    className={className}
    {...inputOptions}
    placeholder={placeholder}
    onChange={data => onChange(data.complete, data)}
  />
)

CardNumber.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default InputContainer(CardNumber)
