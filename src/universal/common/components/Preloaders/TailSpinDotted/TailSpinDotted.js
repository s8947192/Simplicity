import React from 'react'
import cn from 'classnames'

import styles from './tailSpinDotted.scss'

const Preloader = ({ color }) => (
  <div className={styles['sk-circle']}>
    {
      Array(13).fill().map((el, id) =>
        <div key={id} className={cn({ [styles[`sk-circle__${color}`]]: color }, styles[`sk-circle${id}`], styles['sk-child'])}></div>
      )
    }
  </div>
)

export default Preloader
