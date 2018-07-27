import React, { PureComponent } from 'react'
import { Field, reduxForm, change } from 'redux-form/immutable'

import Input from 'universal/common/components/FormFields/Input'
import Select from 'universal/common/components/FormFields/Select'
import Preloader from 'universal/common/components/Preloader'
import Notification from 'universal/common/components/Notification'

import TotalPrice from './components/TotalPrice'
import StepControls from '../../StepControls'

import styles from './subscriptionStep.scss'

const durationOptions = [
  { value: '1', label: '1 month' },
  { value: '3', label: '3 month' },
  { value: '6', label: '6 month' }
]

class SubscriptionStep extends PureComponent {

  componentWillMount() {
    const { subscriptions, requestSubscriptions } = this.props
    if (!subscriptions.length) {
      requestSubscriptions()
    }
  }

  componentWillReceiveProps(nextProps) {
    const { subscriptionPrice, initialValues, dispatch } = nextProps
    if (subscriptionPrice <= 0) {
      dispatch(change('subscriptionStep', 'selectedDuration', 1))
    }
  }

  onSubmit = props => values => this.props.completeStep(values)

  render() {
    const {
      handleSubmit,
      submitting,
      setNextStep,
      selectedDuration,
      subscriptionPrice,
      subscriptions,
    } = this.props

    const infoMessage = subscriptionPrice <= 0
      ? 'Free plan is absolutely free and lasts forever, but has some functional limitations'
      : 'Choosing chargable plan, you will need to add your credit card to subscribe during user registration process'

    if (!subscriptions.length) return (
      <div className={styles.preloaderWrapper}><Preloader /></div>
    )

    return (
      <form className={styles.formWrapper}>
        <Notification message={infoMessage} />
        <div>
          <Field
            name='selectedSubscription'
            label='subscription'
            component={Select}
            options={subscriptions}
          />
          {
            subscriptionPrice > 0 && (
              <Field
                name='selectedDuration'
                label='duration'
                component={Select}
                options={durationOptions}
              />
            )
          }
        </div>
        {
          subscriptionPrice != 0 && (
            <TotalPrice
              duration={selectedDuration}
              price={subscriptionPrice}
            />
          )
        }
        <StepControls
          onCompleteClick={handleSubmit(this.onSubmit(this.props))}
          onSkipClick={() => setNextStep(3)}
          isEnabled={!submitting}
        />
      </form>
    )
  }
}

export default reduxForm({
  form: 'subscriptionStep'
})(SubscriptionStep)
