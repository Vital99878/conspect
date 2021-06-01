import React from 'react'
import './Header.css'

function Header({ str }: { str: number }) {
  return <div className="header">`Header ${str}`</div>
}
export default Header
