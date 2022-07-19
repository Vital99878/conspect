import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { CSS, DesignPatterns, NavCardProps } from '../../types';
import './NavCard.scss';
/**
 * NavLink из react-router-dom, стилизованный под карточу
 */

const NavCard: React.FC<NavCardProps<CSS | DesignPatterns>> = ({ title, desc }) => {
  const { url } = useRouteMatch();
  return (
    <NavLink to={`${url}/${title}`} className={'nav-card'}>
      <div> {title}</div>
      <div> {desc}</div>
    </NavLink>
  );
};

export default NavCard;
