import React, { FC } from 'react'
import styles from './RXjs.module.scss'
import SubTest from './components/subject'
import BallComponent from './components/ball'
import Layout from '../../components/Layout/Layout'

const RXjsPage: FC = () => {
  return (
    <Layout pageHeading="RxJS Page">
      <div className={styles.rxjs}>
        <SubTest />
        <BallComponent />
        <SubTest />
      </div>
    </Layout>
  )
}

export default RXjsPage
