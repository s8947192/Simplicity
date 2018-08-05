import React from 'react'
import ReactTransitionGroup from 'react-transition-group/TransitionGroup'

import AnimatedMount from 'universal/common/components/HOC/AnimatedMount'

import NavEl from './NavEl'

import accountImg from 'universal/assets/icons/registration/account.svg'
import subscriptionImg from 'universal/assets/icons/registration/subscription.svg'
import mainSettingsImg from 'universal/assets/icons/registration/mainSettings.svg'
import paymentMethodImg from 'universal/assets/icons/registration/paymentMethod.svg'
import verificationImg from 'universal/assets/icons/registration/verification.svg'
import doneImg from 'universal/assets/icons/registration/done.svg'

import styles from './navigation.scss'

const AnimatedNavEl = AnimatedMount({
  unmountedStyle: {
    opacity: 0,
    transform: 'translate3d(-20px, 0, 0)',
    transition: 'all 500ms cubic-bezier(1.000, 0.350, 0.750, 0.750)',
    transitionTimingFunction: 'cubic-bezier(1.000, 0.350, 0.750, 0.750)'
  },
  mountedStyle: {
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
    transition: 'all 500ms cubic-bezier(1.000, 0.350, 0.750, 0.750)',
    transitionTimingFunction: 'cubic-bezier(1.000, 0.350, 0.750, 0.750)'
  },
})(NavEl)

const Navigation = ({
  completedSteps,
  activeStep,
  setActiveStep,
  isPaymentMethodAvailable
}) => (
  <div className={styles.component}>
    <NavEl
      text='Account'
      img={accountImg}
      isDone={completedSteps.has(0)}
      isActive={activeStep === 0}
      onClick={() => setActiveStep(0)}
    />
    <NavEl
      text='Subscription'
      img={subscriptionImg}
      isDone={completedSteps.has(1)}
      isActive={activeStep === 1}
      onClick={() => setActiveStep(1)}
    />
    <NavEl
      text='Main Settings'
      img={mainSettingsImg}
      isDone={completedSteps.has(2)}
      isActive={activeStep === 2}
      onClick={() => setActiveStep(2)}
    />
    <ReactTransitionGroup>
      {
        isPaymentMethodAvailable && (
          <AnimatedNavEl
            text='Payment Method'
            img={paymentMethodImg}
            isDone={completedSteps.has(3)}
            isActive={activeStep === 3}
            onClick={() => setActiveStep(3)}
            isPaymentMethodAvailable={isPaymentMethodAvailable}
          />
        )
      }
    </ReactTransitionGroup>
    <NavEl
      text='Verification'
      img={verificationImg}
      isDone={completedSteps.has(4)}
      isActive={activeStep === 4}
      onClick={() => setActiveStep(4)}
    />
    <NavEl
      text='Done'
      img={doneImg}
      isDone={completedSteps.has(5)}
      isActive={activeStep === 5}
      onClick={() => setActiveStep(5)}
    />
  </div>
)

export default Navigation
