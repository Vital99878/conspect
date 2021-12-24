import React from 'react'
import './CssPosition.css'

const CssPosition: React.FC = () => {
  return (
    <div className="mainParent">
      Main Parent
      <div className="parent">
        Parent
        <div className="child child-1">child 1</div>
        <div className="child child-2">child 2</div>
        <div className="child child-3">child 3</div>
      </div>
      <div className="sticky">Sticky</div>
    </div>
  )
}

export default CssPosition
