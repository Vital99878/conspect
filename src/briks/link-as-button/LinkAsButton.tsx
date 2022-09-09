import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { LinkAsButton as Props } from '../types/linkAsButton';
import './LinkAsButton.scss';

export default function LinkAsButton(props: PropsWithChildren<Props>) {
  const { primary, secondary, transparent, disabled, className, children, onClick, hasIcon, ...other } = props;

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
        primary && !disabled && 'link-primary',
        primary && disabled && 'link-primary-disabled',
        secondary && 'link-secondary',
        secondary && disabled && 'link-secondary-disabled',
        transparent && 'link-transparent',
        transparent && disabled && 'link-transparent-disabled'
      )}
      {...other}
      onClick={handleClick}
    >
      {!hasIcon ? (
        props.children
      ) : (
        <div className={'linkWithIcon'}>
          <div className={'linkWithIcon__icon'}>
            <svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.833 6.16668H7.83301V1.16668C7.83301 0.945663 7.74521 0.733702 7.58893 0.577421C7.43265 0.421141 7.22069 0.333344 6.99967 0.333344C6.77866 0.333344 6.5667 0.421141 6.41042 0.577421C6.25414 0.733702 6.16634 0.945663 6.16634 1.16668V6.16668H1.16634C0.945327 6.16668 0.733366 6.25447 0.577086 6.41075C0.420805 6.56703 0.333008 6.779 0.333008 7.00001C0.333008 7.22102 0.420805 7.43299 0.577086 7.58927C0.733366 7.74555 0.945327 7.83334 1.16634 7.83334H6.16634V12.8333C6.16634 13.0544 6.25414 13.2663 6.41042 13.4226C6.5667 13.5789 6.77866 13.6667 6.99967 13.6667C7.22069 13.6667 7.43265 13.5789 7.58893 13.4226C7.74521 13.2663 7.83301 13.0544 7.83301 12.8333V7.83334H12.833C13.054 7.83334 13.266 7.74555 13.4223 7.58927C13.5785 7.43299 13.6663 7.22102 13.6663 7.00001C13.6663 6.779 13.5785 6.56703 13.4223 6.41075C13.266 6.25447 13.054 6.16668 12.833 6.16668Z"
                fill="white"
                fillOpacity="0.96"
              />
            </svg>
          </div>

          {props.children}
        </div>
      )}
    </Link>
  );
}
