import { connect } from 'react-redux'

import SubscriptionSwitcher from '../components/SubscriptionSwitcher'
import { selectDuration } from 'universal/common/actions/subscriptions'
import { getDuration } from 'universal/common/selectors/entities'

const mapStateToProps = state => ({
  duration: getDuration(state)
})

const mapDispatchToProps = dispatch => ({
  selectDuration: duration => dispatch(selectDuration(duration))
})

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionSwitcher)
