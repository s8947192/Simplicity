import { connect } from 'react-redux'

import BaseSettingsStep from '../components/Steps/BaseSettingsStep'

import actions from '../actions'
import { getLanguages, getCurrencies } from '../selectors'

const mapStateToProps = state => ({
  languages: getLanguages(state),
  currencies: getCurrencies(state)
})

const mapDispatchToProps = dispatch => ({
  requestBaseSettings: () => dispatch(actions.requestBaseSettings())
})

export default connect(mapStateToProps, mapDispatchToProps)(BaseSettingsStep)
