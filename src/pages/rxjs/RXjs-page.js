import React from 'react'
import styles from './RXjs.module.scss'
import SubTest from './components/subject'
import BallComponent from './components/ball'

const RXjsPage = () => {
  return (
    <div className={styles.rxjs}>
      <BallComponent />
      <SubTest />
    </div>
  )
}

export default RXjsPage
