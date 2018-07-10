import { connect } from 'react-redux'

import BaseSettingsStep from '../components/Steps/BaseSettingsStep'

const mapStateToProps = state => ({
  initialValues: {
    systemLanguage: 'english',
  }
})

export default connect(mapStateToProps, null)(BaseSettingsStep)
