import React from 'react'
import PropTypes from 'prop-types'
import InputContainer from '../InputContainer'
import { PostalCodeElement } from 'react-stripe-elements'

const Zipcode = ({
  onChange,
  placeholder = 'Zip Code',
  ...inputOptions
}) => (
  <PostalCodeElement
    {...inputOptions}
    placeholder={placeholder}
    onChange={({ complete }) => onChange(complete)} />
)

Zipcode.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}

export default InputContainer(Zipcode)
