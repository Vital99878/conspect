import { NavigationProps } from './types';
import React from 'react';
import './Navigation.scss';

const Navigation: React.FC<NavigationProps> = ({ children }) => {
  return (
    <nav>
      <ul className="menu">{children}</ul>
    </nav>
  );
};

export default Navigation;
