interface VariantPrimary {
  primary: true;
  secondary?: never;
  transparent?: never;
}
interface VariantSecondary {
  primary?: never;
  secondary: true;
  transparent?: never;
}
interface VariantTransparent {
  primary?: never;
  secondary?: never;
  transparent: true;
}

export type Variant = VariantPrimary | VariantSecondary | VariantTransparent;
