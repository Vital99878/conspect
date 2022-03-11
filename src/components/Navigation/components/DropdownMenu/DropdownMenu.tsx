import React, { useState, KeyboardEventHandler, useEffect, useRef } from 'react'
import './DropdownMenu.scss'
import { NavLink } from 'react-router-dom'
import { useOutsideClickCallback } from '../../../../hooks/useClickOutside'
import { useEscapeKey } from '../../../../hooks/useEscapeKey'
import { DropdownSectionProps, DropdownMenuProps } from '../../types'

/**
 * DropdownMenu with list of NavLink
 * 1.
 */

const DropdownSection: React.FC<DropdownSectionProps> = ({ url: parentUrl, label, menuItems }) => {
  return (
    <div className={'dropdown-section '}>
      <div className="dropdown-section-heading">{label}</div>
      <div className="dropdown-section-links information-grid">
        {menuItems.map(({ label, url }) => {
          return (
            <NavLink className={'dropdown-section link'} to={`${parentUrl}/${url}`} key={url}>
              {label}
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ sections, menuItem }) => {
  const [isActive, setIsActive] = useState<'' | 'active'>('')
  const navItemRef = useRef(null)

  function showDropdown(): void {
    setIsActive((active) => {
      if (active) return ''
      return 'active'
    })
  }
  useEscapeKey(() => setIsActive(''))
  useOutsideClickCallback(navItemRef, () => setIsActive(''))

  return (
    <li key={menuItem.label} className={'dropdown'} ref={navItemRef}>
      <NavLink to={menuItem.url} className={'link dropdown'} onClick={showDropdown}>
        {menuItem.label}{' '}
      </NavLink>
      <div className={`dropdown-menu ${isActive} -grid`}>
        {sections.map(({ label, menuItems }) => {
          return <DropdownSection url={menuItem.url} label={label} menuItems={menuItems} key={label} />
        })}
      </div>
    </li>
  )
}

export default DropdownMenu
