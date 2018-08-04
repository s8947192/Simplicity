import ReactSelect from 'react-select'
import styled from 'styled-components'

const StyledReactSelect = styled(ReactSelect)`
  &.Select {
    &.is-open > .Select-control {
      outline: none;
      box-shadow: none;
    }
    &.is-focused > .Select-control {
      outline: none;
      box-shadow: none;
      border: 1px solid #efefef;
    }
  }
  .Select-menu-outer {
    border: 1px solid #efefef;
    box-shadow: none;
  }
  .Select-placeholder {
    font-size: 11px;
    display: flex;
    flex: 1;
    align-items: center;
    margin-left: 10px;
  }
  .Select-arrow-zone {
    padding-right: 20px;
    transform: scaleX(0.7);
    color: #949494;
  }
  .Select-control {
    cursor: pointer;
    height: 48px;
    box-shadow: none;
    border: 1px solid #efefef;
    border-radius: 0;
  }
`
export default StyledReactSelect
