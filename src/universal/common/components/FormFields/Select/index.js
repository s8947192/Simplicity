import React, { Component } from 'react'
import ReactSelect from 'react-select'
import styled from 'styled-components'
import Gravatar from 'react-gravatar'
import cn from 'classnames'
import styles from './styles.scss'

class OptionRenderer extends Component {

  handleMouseDown = e => {
    const { onSelect, option } = this.props
		e.preventDefault()
		e.stopPropagation()
		onSelect(option, e)
	}

	handleMouseEnter = e => {
    const { onFocus, option } = this.props
		onFocus(option, e)
	}

	handleMouseMove = e => {
    const { onFocus, isFocused, option } = this.props
		if (isFocused) return
		onFocus(option, e)
	}

  render() {
    const { option, children, className } = this.props
    const { icon } = option
    return (
      <div
        className={cn(className, styles.option)}
				onMouseDown={this.handleMouseDown}
				onMouseEnter={this.handleMouseEnter}
				onMouseMove={this.handleMouseMove}
				title={option.title}
      >
        { icon && <img height={icon.size} className={styles.icon} src={icon.src} /> }
				{ children }
			</div>
    )
  }
}

class ValueRenderer extends Component {
  render() {
    const { children, value } = this.props
    const { icon } = value
    return (
      <div className={cn('Select-value', styles.value)} title={value.title}>
				<span className={cn('Select-value-label', styles.valueEl)}>
          { icon && <img height={icon.size} className={styles.icon} src={icon.src} /> }
					{ children }
				</span>
			</div>
    )
  }
}

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
  arrowRenderer = ({ isOpen }) => <span style={{ transform: 'rotateZ(-90deg)' }}>{ isOpen ? '>' : '<' }</span>

  render() {
    const { option } = this.state
    const { input, meta, options, label } = this.props

    return (
      <div>
        <div className={styles.labelWrapper}>
          <label className={styles.label}>{ label }</label>
        </div>
        <StyledReactSelect
          {...input}
          className={styles.SelectWrapper}
          style={{
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: meta.active ? '0px 0px 8px 1px rgba(77, 141, 255, 0.2)' : 'none',
            border: 'none'
          }}
          arrowRenderer={this.arrowRenderer}
          onChange={this.setOption}
          optionComponent={OptionRenderer}
          options={options}
          value={option}
          valueComponent={ValueRenderer}
          clearable={false}
          searchable={false}
        />
      </div>
    )
  }
}

const StyledReactSelect = styled(ReactSelect)`
  .Select-control > *:last-child {
    transform: rotateZ(-90deg) scaleX(0.7);
    margin-right: 10px;
    color: #949494;
  }
  .Select-menu-outer {
    border: 1px solid #e9e9e9;
  }
`
