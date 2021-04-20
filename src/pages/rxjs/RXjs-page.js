import React from 'react'
import styles from './RXjs.module.scss'
import SubTest from './components/subject'
import { useSubject } from './components/subject/hooks/useSubject'
import BallComponent from './components/ball'

const RXjsPage = () => {
  const { field, updateField } = useSubject()

  return (
    <div className={styles.rxjs}>
      <BallComponent />
      <SubTest field={field} updateField={updateField} />
    </div>
  )
}

export default RXjsPage
