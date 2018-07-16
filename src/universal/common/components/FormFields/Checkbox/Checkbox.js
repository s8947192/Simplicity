import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import styles from './checkbox.scss'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#32c83d'
    }
  }
})

const CheckboxRenderer = ({ input, label }) => (
  <MuiThemeProvider theme={theme}>
    <Checkbox
      label={label}
      checked={input.value ? true : false}
      onChange={input.onChange}
      color='primary'
    />
  </MuiThemeProvider>
)

export default CheckboxRenderer
