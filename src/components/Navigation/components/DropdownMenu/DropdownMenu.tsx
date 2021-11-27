import React from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import {MenuItemType} from './models/Dropdown';
import './DropdownMenu.scss'

// type DropdownMenuProps = {
//     props: MenuItemType[]
// }

export const DropdownMenu: React.FC = () => {
    // const {pathname} = useLocation()
    // const history = useHistory()

  return (
    <ul className='dropdown'>
      <a>
        Dropdown menu
      </a>
    </ul>
  )
}

export default DropdownMenu
