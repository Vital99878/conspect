import React from 'react'
import '../../../../index.scss'

export const CommandTest: React.FC = () => {
  return (
    <div className="AdapterTest">

      <h2>Phone adapter</h2>
      <div className={'my-buttons'}>
        <button onClick={() => console.log('')}>Iphone</button>
      </div>
    </div>
  )
}

export default CommandTest
