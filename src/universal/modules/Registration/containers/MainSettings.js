import { connect } from 'react-redux'

import MainSettings from '../components/Steps/MainSettings'

import { actions } from '../actions'
import { getCurrencies, getLanguages } from 'universal/common/selectors/entities'
import { getSelectedLanguageId, getSelectedCurrencyId } from '../selectors'

const mapStateToProps = state => ({
  currencies: getCurrencies(state),
  languages: getLanguages(state),
  enableReinitialize: true,
  initialValues: {
    systemLanguage: getSelectedLanguageId(state),
    systemCurrency: getSelectedCurrencyId(state)
  }
})

const mapDispatchToProps = dispatch => ({
  requestMainSettings: () => dispatch(actions.requestMainSettings.start()),
  saveMainSettings: data => dispatch(actions.saveMainSettings.start(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(MainSettings)
