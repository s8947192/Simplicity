import React, { Component } from 'react'
import ReactSelect from 'react-select'
import Gravatar from 'react-gravatar'
import cn from 'classnames'
import styles from './styles.scss'

class OptionComponent extends Component {

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
    return (
      <div className='section'>
        <div
          className={className}
          style={{
            height: 50,
            display: 'flex',
            alignItems: 'center'
          }}
  				onMouseDown={this.handleMouseDown}
  				onMouseEnter={this.handleMouseEnter}
  				onMouseMove={this.handleMouseMove}
  				title={option.title}
        >
          <Gravatar
            email={option.email}
            size={15}
          />
  				{ children }
  			</div>
      </div>
    )
  }
}

class ValueComponent extends Component {
  render() {
    const { children, value } = this.props
    return (
      <div
        className='Select-value'
        title={value.title}
        style={{
          height: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
				<span className='Select-value-label'>
          <Gravatar
            email={value.email}
            size={15}
          />
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

  setOption = (option) => this.setState({ option })
  arrowRenderer = ({ isOpen }) => <span>{ isOpen ? '>' : '<' }</span>

  render() {
    const { option } = this.state
    const { input, meta, options } = this.props
    return (
      <ReactSelect
        className={styles.Select}
        style={{
          height: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: 'none',
          border: 'none'
        }}
        arrowRenderer={this.arrowRenderer}
        onChange={this.setOption}
        optionComponent={OptionComponent}
        options={options}
        value={option}
        valueComponent={ValueComponent}
        clearable={false}
        searchable={false}
      />
    )
  }
}
