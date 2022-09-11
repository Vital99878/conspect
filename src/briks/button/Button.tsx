import React from 'react';
import clsx from 'clsx';
import { ButtonProps } from '../types/ButtonProps';
import './Button.scss';

export default function Button(props: ButtonProps) {
  const { primary, secondary, transparent, className, children, onClick, ...other } = props;

  return (
    <button
      className={clsx(
        className,
        'btn',
        primary && 'btn-primary',
        secondary && 'btn-secondary',
        transparent && 'btn-transparent'
      )}
      {...other}
    >
      {props.children}
    </button>
  );
}
