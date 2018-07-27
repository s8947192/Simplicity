import React from 'react'
import { shallow } from 'enzyme'

import HeaderSite from 'universal/common/components/HeaderSite'
import Site from '../Site'

import Register from 'universal/modules/Register'

describe('(Component) Site', () => {

  let component

  beforeAll(() => {
    const minProps = {
      match: { url: '/' },
      location: { pathname: '/' }
    }
    component = shallow(<Site {...minProps} />)
  })

  it('should render correctly', () => {
    expect(component.exists()).toBe(true)
  })

  it('should render HeaderSite', () => {
    expect(component.find(HeaderSite)).toBeDefined()
  })

  it('should render 2 shildren', () => {
    expect(component.props().children).toHaveLength(2)
  })

  it('should render Switch', () => {
    expect(component.find('Switch')).toHaveLength(1)
  })

})
