import React, { Component } from 'react'
import styles from './defaultOptionRenderer.scss'
import cn from 'classnames'

export default class DefaultOptionRenderer extends Component {

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
    const { imgSrc } = option
    return (
      <div
        className={cn(className, styles.option)}
				onMouseDown={this.handleMouseDown}
				onMouseEnter={this.handleMouseEnter}
				onMouseMove={this.handleMouseMove}
				title={option.title}
      >
        { imgSrc && <img height={24} className={styles.icon} src={imgSrc} /> }
				{ children }
			</div>
    )
  }
}
