import React from 'react'
import PropTypes from 'prop-types'
import InputContainer from '../InputContainer'
import { CardCVCElement } from 'react-stripe-elements'
import styles from './styles.scss'

const CardCVC = ({ onChange, ...inputOptions }) => (
  <CardCVCElement
    {...inputOptions}
    className={styles.test}
    onChange={({ complete }) => onChange(complete)}
  />
)

CardCVC.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default InputContainer(CardCVC)
