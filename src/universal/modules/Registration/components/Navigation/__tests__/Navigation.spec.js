import React from 'react'
import { shallow } from 'enzyme'

import Navigation from '../Navigation'

describe('(Component) Navigation', () => {
  let component

  beforeAll(() => {
    component = shallow(<Navigation />)
  })

  it('should be defined', () => {
    expect(component.exists()).toBeDefined()
  })

  it('should have 6 children', () => {
    expect(component.props().children).toHaveLength(6)
  })
})
