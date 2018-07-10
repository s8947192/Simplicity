import React from 'react'
import ReactTransitionGroup from 'react-transition-group/TransitionGroup'
import AnimatedMount from 'universal/common/components/AnimatedMount'
import Input from 'universal/common/components/Input'
import Step from './Step'

import styles from './stepsNav.scss'

const AnimatedStep = AnimatedMount({
  unmountedStyle: {
    opacity: 0,
    transform: 'translate3d(0, -20px, 0)',
    transition: 'opacity 250ms ease-out, transform 250ms ease-out',
  },
  mountedStyle: {
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
    transition: 'opacity 250ms ease-out, transform 250ms ease-out',
  },
})(Step)

const StepsNav = ({ isSubscrFree, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <Step {...props} thisStep={0} stepLabel='Account' />
      <Step {...props} thisStep={1} stepLabel='Subscription' />
      <ReactTransitionGroup>
        {
          !isSubscrFree && (
            <AnimatedStep {...props}
              thisStep={2}
              isEnabled={false}
              stepLabel='Payment Method'
            />
          )
        }
      </ReactTransitionGroup>
      <Step {...props}
        thisStep={3}
        isSubscrFree={isSubscrFree}
        stepLabel='Main Settings'
      />
      <Step {...props}
        thisStep={4}
        isSubscrFree={isSubscrFree}
        stepLabel='Verification'
      />
      <Step {...props}
        thisStep={5}
        isSubscrFree={isSubscrFree}
        stepLabel='Complete'
        isEnabled={false}
        noLine
      />
    </div>
  )
}

export default StepsNav
