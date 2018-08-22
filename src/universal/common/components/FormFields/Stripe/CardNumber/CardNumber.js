import React from 'react'
import { CardNumberElement } from 'react-stripe-elements'

import InputContainer from '../InputContainer'

const CardNumber = ({
  onChange,
  className,
  placeholder= 'Enter card number...',
  ...inputOptions
}) => (
  <CardNumberElement
    style={{ base: { fontSize: '12px' } }}
    placeholder={placeholder}
    onChange={data => onChange(data)}
  />
)

export default InputContainer(CardNumber)
