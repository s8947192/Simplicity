import React, { Component } from 'react'
import StyledReactSelect from './StyledReactSelect'

import DefaultValueRenderer from './components/DefaultValueRenderer'
import DefaultLabelRenderer from './components/DefaultLabelRenderer'
import DefaultOptionRenderer from './components/DefaultOptionRenderer'

export default class Select extends Component {
  constructor(props) {
    super(props)
    this.state = {
      option: null
    }
  }

  setOption = (option) => {
    this.props.input.onChange(option.value)
    this.setState({ option })
  }

  render() {
    const { option } = this.state
    const {
      input,
      meta,
      options,
      label,
      OptionRenderer,
      ValueRenderer,
      disabled
    } = this.props

    return (
      <div style={{ marginBottom: 20 }}>
        { label && <DefaultLabelRenderer label={label} /> }
        <StyledReactSelect {...input}
          onChange={this.setOption}
          optionComponent={OptionRenderer || DefaultOptionRenderer}
          valueComponent={ValueRenderer || DefaultValueRenderer}
          // value={option}
          options={options}
          clearable={false}
          searchable={false}
          disabled={disabled}
        />
      </div>
    )
  }
}
