import React from 'react'
import { List, Map } from 'immutable'

import Description from './Terms/Description'
import InformationCollectionAndUse from './Terms/InformationCollectionAndUse'
import LogData from './Terms/LogData'
import Cookies from './Terms/Cookies'
import ServiceProviders from './Terms/ServiceProviders'
import Security from './Terms/Security'
import LinksToOtherSites from './Terms/LinksToOtherSites'
import ChildrensPrivacy from './Terms/ChildrensPrivacy'
import ChangesToThisPrivacyPolicy from './Terms/ChangesToThisPrivacyPolicy'

import Term from './Term'

import downloadImg from 'universal/assets/icons/common/download.svg'

import styles from './termsOfService.scss'

const terms = List([
  Map({
    component: Description()
  }),
  Map({
    title: 'Information Collection and Use',
    component: InformationCollectionAndUse()
  }),
  Map({
    title: 'Log Data',
    component: LogData()
  }),
  Map({
    title: 'Cookies',
    component: Cookies()
  }),
  Map({
    title: 'Service Providers',
    component: ServiceProviders()
  }),
  Map({
    title: 'Security',
    component: Security()
  }),
  Map({
    title: 'Linksto Other Sites',
    component: LinksToOtherSites()
  }),
  Map({
    title: 'Children’s Privacy',
    component: ChildrensPrivacy()
  }),
  Map({
    title: 'Changes to This Privacy Policy',
    component: ChangesToThisPrivacyPolicy()
  }),
])

const Terms = () => (
  <div className={styles.component}>
    <div className={styles.header}>
      <img onClick={() => console.log('DOWNLOAD')} className={styles.img} src={downloadImg} />
      <div className={styles.title}>
        <div className={styles.title__main}>TERMS OF SERVICE</div>
        <div className={styles.title__last_update}>Last updated September 2018</div>
      </div>
    </div>
    <div className={styles.terms}>
      {
        terms.map((term, index) =>
          <Term key={index} index={index} title={term.get('title')} component={term.get('component')} />
        )
      }
    </div>
  </div>
)

export default Terms
