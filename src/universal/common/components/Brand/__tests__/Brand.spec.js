import React from 'react'
import Brand from '../Brand'
import { shallow } from 'enzyme'

describe('(Component) Brand', () => {
  let _component

  beforeAll(() => {
    _component = shallow(<Brand />)
  })

  it('should exist', () => {
    expect(_component).toBeDefined()
  })
})
