import { LinkProps } from 'react-router-dom';

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

export type LinkAsButton = LinkProps & {disabled?: boolean} & LinkVariant;
