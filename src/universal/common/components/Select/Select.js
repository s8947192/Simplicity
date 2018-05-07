import React, { Component } from 'react'
import cn from 'classnames'

import styles from './select.scss'

const langs = {
  'russian': 'rus',
  'english': 'eng',
  'german': 'ger',
  'spanish': 'spain'
}

const Icon = ({ type }) => {
  if (langs[type]) {
    return (
      <div className={cn(styles.icon, styles[`icon__${langs[type]}`])} />
    )
  }
  return <div />
}

export default class Select extends Component {
  constructor() {
    super()
    this.state = {
      selectedValue: null,
      isOpen: false
    }
  }
  componentWillMount() {
    const { options } = this.props
    if (options.length) {
      this.setState({ selectedValue: options[0].text })
    }
  }

  componentWillReceiveProps(nextProps) {
    const { options } = nextProps
    if(options.length) {
      this.setState({ selectedValue: options[0].text })
    }
  }

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen })

  onSelect = option => {
    this.setState({ selectedValue: option.text })
    this.props.onSelect(option.id)
  }

  render() {
    const { options, label, style } = this.props
    const { selectedValue, isOpen } = this.state
    return (
      <div style={style} className={styles.selectMainWrapper}>
        <div className={styles.selectLabel}>{label}</div>
        <div className={styles.selectWrapper} onClick={this.toggleOpen}>
          <div className={styles.selectedValue}>
            <Icon type={selectedValue} />
            <div>{ selectedValue }</div>
          </div>
          <div className={cn(styles.downArrow, styles[`downArrow__${isOpen ? 'opened' : 'closed'}`])} />
          {
            isOpen && (
              <div className={styles.valuesDropdown}>
                {
                  options.filter(option => option.text !== selectedValue).map((option, index) => (
                    <div key={index} className={styles.selectValue} onClick={() => this.onSelect(option)}>
                      <Icon type={option.text} />
                      <div>{ option.text }</div>
                    </div>
                  ))
                }
              </div>
            )
          }
        </div>
      </div>
    )
  }
}
