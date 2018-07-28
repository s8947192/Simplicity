import React from 'react'

import TitleDevider from 'universal/common/components/TitleDevider'
import InfoCard from 'universal/common/components/Cards/InfoCard'
import Button from 'universal/common/components/Button'

import DurationOption from './DurationOption'
import TotalPrice from './TotalPrice'

import subscriptionImg from 'universal/assets/icons/registration/subscription.svg'
import stopwatchImg from 'universal/assets/icons/common/stopwatch.svg'
import bargainImg from 'universal/assets/icons/common/bargain.svg'

import freeImg from 'universal/assets/icons/subscription/free.svg'
import standardImg from 'universal/assets/icons/subscription/standard.svg'
import standardPlusImg from 'universal/assets/icons/subscription/standardPlus.svg'
import businessImg from 'universal/assets/icons/subscription/business.svg'

import styles from './subscription.scss'

const Subscription = () => {
  return (
    <div className={styles.component}>
      <TitleDevider img={subscriptionImg} text='Select subscription plan' />
      <div className={styles.subscriptions}>
        <InfoCard isActive img={freeImg} title='Basic' text='free' />
        <InfoCard img={standardImg} title='Standard' text='$8.99' abbr='/mo' />
        <InfoCard img={standardPlusImg} title='Standard+' text='$13.99' abbr='/mo' />
        <InfoCard img={businessImg} title='Business' text='$48.99' abbr='/mo' />
      </div>
      <TitleDevider img={stopwatchImg} text='Select subscription duration' />
      <div className={styles.durationOptions}>
        <DurationOption
          text='1 month'
          textAfter='0%'
          textAfterLabel='save'
          onClick={() => console.log('CLICK')}
        />
        <DurationOption
          isActive
          text='3 month'
          textAfter='10%'
          textAfterLabel='save'
          onClick={() => console.log('CLICK')}
        />
        <DurationOption
          text='6 month'
          textAfter='20%'
          textAfterLabel='save'
          onClick={() => console.log('CLICK')}
        />
      </div>
      <TitleDevider img={bargainImg} text='Billing info' />
      <TotalPrice originalPrice={248.99} discount={0.2} />
      <div className={styles.buttonWrapper}>
        <Button onClick={() => console.log('CLICK')} value='complete' />
      </div>
    </div>
  )
}

export default Subscription
