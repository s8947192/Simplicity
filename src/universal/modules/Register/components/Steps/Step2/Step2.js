import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'

import Input from 'universal/common/components/FormFields/Input'
import Select from 'universal/common/components/FormFields/Select'
import TotalPrice from './components/TotalPrice'
import StepControls from '../../StepControls'

class Step2 extends PureComponent {

  onSubmit = props => values => this.props.completeStepOne(values)

  render() {
    const {
      handleSubmit,
      submitting,
      setNextStep,
      selectedDuration,
      selectedSubscription
    } = this.props

    return (
      <form>
        <Field
          name='selectedDuration'
          label='duration'
          component={Select}
          options={[
            { value: '1', label: '1 month' },
            { value: '3', label: '3 month' },
            { value: '6', label: '6 month' }
          ]}
        />
        <Field
          name='selectedSubscription'
          label='subscription'
          component={Select}
          options={[
            { value: 'id0', label: 'Free' },
            { value: 'id1', label: 'Standart: $8.99' },
            { value: 'id2', label: 'Standart+: $14.99' },
            { value: 'id3', label: 'Business: 48.99' }
          ]}
        />
        <TotalPrice
          selectedDuration={selectedDuration}
          selectedSubscription={selectedSubscription}
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
