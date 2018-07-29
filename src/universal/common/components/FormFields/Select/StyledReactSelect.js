import ReactSelect from 'react-select'
import styled from 'styled-components'

const StyledReactSelect = styled(ReactSelect)`
  &.Select {
    box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.03);
    &.is-open > .Select-control {
      outline: none;
      box-shadow: none;
    }
    &.is-focused:not(.is-open) > .Select-control {
      outline: none;
      box-shadow: none;
      border: none;
    }
  }
  .Select-menu-outer {
    border: none;
    box-shadow: none;
  }
  .Select-placeholder {
    top: 7px;
    font-size: 13px;
    left: 10px;
  }
  .Select-arrow-zone {
    padding-right: 20px;
    transform: scaleX(0.7);
    color: #949494;
  }
  .Select-control {
    cursor: pointer;
    height: 48px;
    border: none;
    box-shadow: none;
  }
`
export default StyledReactSelect
