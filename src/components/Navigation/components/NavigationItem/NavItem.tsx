import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { MenuItemProps } from '../../types';

/**
 * NavLink из react-router-dom, стилизованный под карточу
 */

export const NavItem: React.FC<MenuItemProps> = ({ props }) => {
  const { label, url } = props;
  const history = useHistory();
  const goToPage = () => history.push(url);

  return (
    <li key={label}>
      <NavLink to={url} onClick={goToPage}>
        {label}
      </NavLink>
    </li>
  );
};
export default NavItem;
