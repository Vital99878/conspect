import React from 'react'
import './CssGrid.scss'

const CssGrid: React.FC = () => {
  return (
    <div className="grid-container">
      <nav>
        <ul>
          <li>
            <a href="#">menu item 1</a>
          </li>
          <li>
            <a href="#">menu item 2</a>
          </li>
          <li>
            <a href="#">menu item 3</a>
          </li>
        </ul>
      </nav>
      <div className="grid-item">grid item 1</div>
      <div className="grid-item">grid item 2</div>
      <div className="grid-item">grid item 3</div>
      <div className="grid-item">grid item 3</div>
    </div>
  )
}

export default CssGrid
