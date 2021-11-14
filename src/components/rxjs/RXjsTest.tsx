import React from 'react'
import { useWindowWidth } from '../../app/customHooks'
import {Observable} from 'rxjs';
import './Jxjs.css'

const RXjsTest: React.FC = () => {
  const windowWidth = useWindowWidth()
  return (
    <div className="rxjs">
        <h1>JXJs</h1>
      <div>
        <p>{`width: ${windowWidth}`}</p>
      </div>
      Test component
    </div>
  )
}

export default RXjsTest
