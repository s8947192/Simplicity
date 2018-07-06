import React, { PureComponent } from 'react'
import { Field, reduxForm, change } from 'redux-form'

import Input from 'universal/common/components/FormFields/Input'
import Select from 'universal/common/components/FormFields/Select'
import TotalPrice from './components/TotalPrice'
import StepControls from '../../StepControls'

import Preloader from 'universal/common/components/Preloader'

import styles from './step2.scss'

const durationOptions = [
  { value: '1', label: '1 month' },
  { value: '3', label: '3 month' },
  { value: '6', label: '6 month' }
]

class Step2 extends PureComponent {

  componentWillMount() {
    const { subscriptions, requestSubscriptions } = this.props
    if (!subscriptions.length) {
      requestSubscriptions()
    }
  }

  componentWillReceiveProps(nextProps) {
    const { selectedSubscriptionPrice, initialValues, dispatch } = nextProps
    if (selectedSubscriptionPrice <= 0) {
      dispatch(change('regStep2', 'selectedDuration', 1))
    }
  }

  onSubmit = props => values => this.props.completeStepOne(values)

  render() {
    const {
      handleSubmit,
      submitting,
      setNextStep,
      selectedDuration,
      selectedSubscriptionPrice,
      subscriptions
    } = this.props
    const isDurationDisabled = selectedSubscriptionPrice <= 0
    if (!subscriptions.length) return (
      <div className={styles.preloaderWrapper}><Preloader /></div>
    )
    return (
      <form>
        <div className={styles.wrapper}>
          <Field
            name='selectedDuration'
            label='duration'
            component={Select}
            options={durationOptions}
            disabled={isDurationDisabled}
          />
          <Field
            name='selectedSubscription'
            label='subscription'
            component={Select}
            options={subscriptions}
          />
        </div>
        <TotalPrice
          duration={selectedDuration}
          price={selectedSubscriptionPrice}
        />
        <StepControls
          isPending={false}
          onCompleteClick={handleSubmit(this.onSubmit(this.props))}
          onSkipClick={() => setNextStep(3)}
          isEnabled={!submitting}
        />
      </form>
    )
  }
}

export default reduxForm({
  form: 'regStep2'
})(Step2)
