import React, { Component } from 'react'
import cn from 'classnames'

import styles from './select.scss'

const langs = {
  'russian': 'rus',
  'english': 'eng',
  'german': 'ger',
  'spanish': 'spain'
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
    this.setState({ selectedValue: options[0] })
  }

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen })
  onSelect = option => this.setState({ selectedValue: option })
  render() {
    const { options, label, style } = this.props
    const { selectedValue, isOpen } = this.state
    return (
      <div style={style} className={styles.selectMainWrapper}>
        <div className={styles.selectLabel}>{label}</div>
        <div className={styles.selectWrapper} onClick={this.toggleOpen}>
          <div className={styles.selectedValue}>
            <div className={cn(styles.icon, styles[`icon__${langs[selectedValue]}`])} />
            <div>{ selectedValue }</div>
          </div>
          <div className={cn(styles.downArrow, styles[`downArrow__${isOpen ? 'opened' : 'closed'}`])} />
          {
            isOpen && (
              <div className={styles.valuesDropdown}>
                {
                  options.filter(option => option !== selectedValue).map((option, index) => (
                    <div key={index} className={styles.selectValue} onClick={() => this.onSelect(option)}>
                      <div className={cn(styles.icon, styles[`icon__${langs[option]}`])} />
                      <div>{ option }</div>
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
