import { ComponentProps, ButtonHTMLAttributes } from 'react';
import { Variant } from './Variant';

/**
 * @description if hasIcon ? need iconProps : не надо iconProps
 */

type WithIcon = { hasIcon: true; iconProps: ComponentProps<any> } | { hasIcon?: never; iconProps?: never };

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & Variant & WithIcon;
