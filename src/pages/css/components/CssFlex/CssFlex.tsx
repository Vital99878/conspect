import React from 'react'
import './CssFlex.scss'

const CssFlex: React.FC = () => {
  return (
    <div className="flex-container">
      <div className="flex-item">flex item 1</div>
      <div className="flex-item">flex item 1</div>
      <div className="flex-item">flex item 1</div>
      <div className="flex-item">
        flex item 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, delectus!
      </div>
      <div className="flex-item">flex item 1</div>
    </div>
  )
}

export default CssFlex
