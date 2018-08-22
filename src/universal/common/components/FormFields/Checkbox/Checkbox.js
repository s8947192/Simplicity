import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import { withStyles } from '@material-ui/core/styles'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import CheckBoxIcon from '@material-ui/icons/CheckBox'

const styles = {
  root: {
    color: '#969696',
    '&$checked': {
      color: '#53aaea',
    },
  },
  checked: {},
  sizeIcon: {
    fontSize: 24
  },
};

const CheckboxRenderer = ({ input, label, classes }) => (
  <Checkbox
    label={label}
    checked={input.value ? true : false}
    onChange={input.onChange}
    icon={<CheckBoxOutlineBlankIcon className={classes.sizeIcon} />}
    checkedIcon={<CheckBoxIcon className={classes.sizeIcon} />}
    classes={{
      root:classes.root,
      checked:classes.checked
    }}
  />
)

export default withStyles(styles)(CheckboxRenderer)
