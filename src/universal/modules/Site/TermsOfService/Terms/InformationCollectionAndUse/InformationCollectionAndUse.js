import React from 'react'
import { Link } from 'react-router-dom'

const InformationCollectionAndUse = () => (
  <div>
    <p>For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information. The information that I request is retained on your device and is not collected by me in any way</p>
    <p>The app does use third party services that may collect information used to identify you.</p>
    <p>Link to privacy policy of third party service providers used by the app.</p>
    <ul>
      <li><Link to='https://policies.google.com/privacy'>Google Play Services</Link></li>
    </ul>
  </div>
)

export default InformationCollectionAndUse
