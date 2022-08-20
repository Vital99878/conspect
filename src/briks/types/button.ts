import { CSSProperties, ComponentProps } from 'react';

interface ButtonOutline {
  outline: true;
  filled?: never;
  empty?: never;
}
interface ButtonFilled {
  outline?: never;
  filled: true;
  empty?: never;
}
interface ButtonEmpty {
  outline?: never;
  filled?: never;
  empty: true;
}
type ButtonVariant = ButtonOutline | ButtonFilled | ButtonEmpty;

/**
 * @description if hasIcon ? need iconProps : не надо iconProps
 */

type WithIcon = { hasIcon: true; iconProps: ComponentProps<any> } | { hasIcon?: never; iconProps?: never };

export type Button = {
  isLoading?: boolean;
  style?: CSSProperties;
  className?: string;
  onClick: () => any;
} & ButtonVariant &
  WithIcon;
