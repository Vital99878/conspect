import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { Button } from './types/button';

export default function ButtonMy(props: PropsWithChildren<Button>) {
  const { empty, filled, outline, className, isLoading, ...other } = props;

  return (
    <button
      className={clsx(
        className,
        'button',
        empty && 'button-empty',
        filled && 'button-filled',
        outline && 'button-outline'
      )}
      {...other}
    >
      {isLoading ? 'loading' : props.children}
    </button>
  );
}
