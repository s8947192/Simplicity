import React, { Component } from 'react'
import { CardNumberElement } from 'react-stripe-elements'

import InputContainer from '../InputContainer'

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
      <CardNumberElement
        style={{ base: { fontSize: '12px' } }}
        placeholder="Enter card number..."
        onChange={this.onHandleChange}
      />
    )
  }
}

export default InputContainer(CardNumber)
