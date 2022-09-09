import { LinkProps } from 'react-router-dom';
import fn = jest.fn;

interface LinkPrimary {
  primary: true;
  secondary?: never;
  transparent?: never;
}
interface LinkSecondary {
  primary?: never;
  secondary: true;
  transparent?: never;
}
interface LinkTransparent {
  primary?: never;
  secondary?: never;
  transparent: true;
}

type LinkVariant = LinkPrimary | LinkSecondary | LinkTransparent;

/**
 * @description Выглядит как кнопка.
 */

export type LinkAsButton = LinkProps & {disabled?: boolean, hasIcon?: boolean} & LinkVariant;
