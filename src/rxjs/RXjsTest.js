import React from 'react'
import { useWindowWidth } from '../app/customHooks'
import './Jxjs.css'
import SubTest from './components/subject'
import { useSubject } from './components/subject/hooks/useSubject'

const RXjsTest = () => {
  const windowWidth = useWindowWidth()
  const { field, updateField } = useSubject()

  return (
    <div className="rxjs">
      <h1>JXJs</h1>
      <div>
        <p>{`width: ${windowWidth}`}</p>
      </div>
      {/* <BallComponent />*/}
      <SubTest field={field} updateField={updateField} />
    </div>
  )
}

export default RXjsTest
