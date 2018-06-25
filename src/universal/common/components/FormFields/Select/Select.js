import React, { Component } from 'react'
import ReactSelect from 'react-select'
import styled from 'styled-components'

import DefaultValueRenderer from './components/DefaultValueRenderer'
import DefaultLabelRenderer from './components/DefaultLabelRenderer'
import DefaultOptionRenderer from './components/DefaultOptionRenderer'

export default class Select extends Component {
  constructor(props) {
    super(props)
    this.state = {
      option: props.options[0]
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
      <div>
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

const StyledReactSelect = styled(ReactSelect)`
  &.Select {
    &.is-open > .Select-control {
      outline: none;
      border: 1px solid #e9e9e9;
      box-shadow: none;
    }
    &.is-focused:not(.is-open) > .Select-control {
      outline: none;
      box-shadow: 0px 0px 8px 1px rgba(77, 141, 255, 0.2);
      border: 1px solid #c3d5f3;
    }
  }
  .Select-control {
    &:hover {
      box-shadow: none;
    }
    cursor: pointer;
    height: 48px;
    border: 1px solid #e9e9e9;
    & > *:last-child {
      transform: scaleX(0.7);
      margin-right: 10px;
      color: #949494;
    }
  }
`
