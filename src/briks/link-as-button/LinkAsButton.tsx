import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { LinkAsButton as Props } from '../types/linkAsButton';
import './LinkAsButton.scss';

export default function LinkAsButton(props: PropsWithChildren<Props>) {
  const { primary, secondary, transparent, disabled, className, children, onClick, ...other } = props;

  function handleClick(evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    if (disabled) {
      evt.preventDefault();
      return;
    }
    if (onClick) onClick(evt);
  }

  return (
    <Link
      className={clsx(
        className,
        'asButton',
        primary && 'link-primary',
        primary && disabled && 'link-primary-disabled',
        secondary && 'link-secondary',
        secondary && disabled && 'link-secondary-disabled',
        transparent && 'link-transparent',
        transparent && disabled && 'link-transparent-disabled'
      )}
      {...other}
      onClick={handleClick}
    >
      {props.children}
    </Link>
  );
}
