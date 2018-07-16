import ReactSelect from 'react-select'
import styled from 'styled-components'

const StyledReactSelect = styled(ReactSelect)`
  &.Select {
    &.is-open > .Select-control {
      outline: none;
      border: 1px solid #e9e9e9;
      box-shadow: none;
    }
    &.is-focused:not(.is-open) > .Select-control {
      outline: none;
      box-shadow: none;
      border: 1px solid #e9e9e9;
    }
  }
  .Select-menu-outer {
    border: 1px solid #e9e9e9;
  }
  .Select-placeholder {
    top: 7px;
    font-size: 13px;
    left: 10px;
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
export default StyledReactSelect
