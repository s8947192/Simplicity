import React from 'react'
import PropTypes from 'prop-types'
import InputContainer from '../InputContainer'
import { CardExpiryElement } from 'react-stripe-elements'

const CardExpiry = ({ onChange, ...inputOptions }) => (
  <CardExpiryElement
    style={{ base: { fontSize: '12px' } }}
    onChange={({ complete }) => onChange(complete)}
  />
)

CardExpiry.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default InputContainer(CardExpiry)
