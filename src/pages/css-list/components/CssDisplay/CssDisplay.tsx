import React from 'react'
import './CssDisplay.scss'

const CssDisplay: React.FC = () => {
  return (
    <div className="display">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, fugit.{' '}
        <span>
          span Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis eos maxime molestias
          voluptas aperiam.
        </span>{' '}
        <a>link to next </a>
      </p>
      <a>link to next </a>
    </div>
  )
}

export default CssDisplay
