import { connect } from 'react-redux'

import BaseSettingsStep from '../components/Steps/BaseSettingsStep'

const mapStateToProps = state => ({
  // initialValues: {
  //   systemLanguage: 'english',
  //   defaultCurrency: 'dollar',
  // }
})

export default connect(mapStateToProps, null)(BaseSettingsStep)
