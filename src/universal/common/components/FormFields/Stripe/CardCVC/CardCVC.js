import React from 'react'
import PropTypes from 'prop-types'
import InputContainer from '../InputContainer'
import { CardCVCElement } from 'react-stripe-elements'
import styles from './cardCVC.scss'

const CardCVC = ({ onChange, ...inputOptions }) => (
  <CardCVCElement
    style={{ base: { fontSize: '12px' } }}
    onChange={({ complete }) => onChange(complete)}
  />
)

CardCVC.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default InputContainer(CardCVC)
