import React from 'react'

import AuthLayout from 'universal/layouts/AuthLayout'

import ActiveStep from '../containers/ActiveStep'
import StepsNav from '../containers/StepsNav'

import styles from './register.scss'

const Register = () => (
  <AuthLayout>
    <div className={styles.wrapper}>
      <StepsNav />
      <div className={styles.devider} />
      <ActiveStep />
    </div>
  </AuthLayout>
)

export default Register
