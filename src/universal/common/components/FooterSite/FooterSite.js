import React from 'react'

import emailImg from 'universal/assets/icons/email.svg'

import facebook from 'universal/assets/icons/social/facebook.svg'
import vkontakte from 'universal/assets/icons/social/vkontakte.svg'
import instagram from 'universal/assets/icons/social/instagram.svg'
import twitter from 'universal/assets/icons/social/twitter.svg'

import styles from './footerSite.scss'

const FooterSite = () => (
  <div className={styles.component}>
    <div className={styles.row}>
      <div className={styles.emailWrapper}>
        <div className={styles.emailText}>Got any questions or suggestions?</div>
        <img className={styles.emailImg} src={emailImg} />
        <div className={styles.emailText}>simplicity@gmail.com</div>
      </div>
      <div className={styles.socialWrapper}>
        <div className={styles.socialText}>follow us on social media</div>
        <img className={styles.socialImg} src={facebook} />
        <img className={styles.socialImg} src={vkontakte} />
        <img className={styles.socialImg} src={instagram} />
        <img className={styles.socialImg} src={twitter} />
      </div>
    </div>
    <div className={styles.row}>
      <div className={styles.rights}>
        Simplicity is a professional scheduling platform. 2018 Simplicity. All rights reserved. Privacy policy and Terms of use.
      </div>
    </div>
  </div>
)

export default FooterSite
